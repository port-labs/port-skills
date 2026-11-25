# Worked example: a React SPA authenticating against Port

Use this when the user's app is a React SPA, built with Lovable, v0, bolt.new, another AI app builder, or by hand, and they want it to log users in through Port and call the Port API. The pattern is platform-agnostic; only the callback URL depends on where the app is hosted.

Register the app first (name, redirect URIs, region, `id` vs `clientId`), see [../references/registering-the-app.md](../references/registering-the-app.md). Use the published, publicly reachable URL plus `/callback` as the `redirect_uri`, not a login-gated live preview. The `clientId` returned there goes in the code below. For why the popup flow is built this way, see [../references/popup-login-explained.md](../references/popup-login-explained.md). For failures, see [../references/troubleshooting.md](../references/troubleshooting.md).

Follow this version, not a raw copy of a customer-supplied prompt. Common deviations to push back on are listed in the troubleshooting file.

## 1. `src/types/port.ts`

```ts
export interface PortUser {
	identifier: string;
	email: string;
	firstName?: string;
	lastName?: string;
	picture?: string;
	teams?: string[];
}

export interface PortAuthState {
	isAuthenticated: boolean;
	user: PortUser | null;
	accessToken: string | null;
	loading: boolean;
	error: string | null;
}
```

## 2. `src/lib/jwt.ts`

Auth0 access tokens issued for a custom API `audience` (see the `login()` function below) are JWTs
— decode the payload directly instead of calling `/userinfo`. **The namespaced claim keys below
(e.g. a hypothetical `https://getport.io/email`) are illustrative, not verified** — confirm the
actual claim names the target environment's token carries before relying on them, same caution as
the Auth0 domain and API base in `references/registering-the-app.md`. Note also that an access token scoped to
a custom `audience` does **not** carry standard profile claims (email, name, picture) by default —
only the ID token does, unless the tenant has an Auth0 Action that copies them into the access token
under namespaced keys. If the decoded payload is missing fields you expect, that's the first thing
to check with the user, not a bug in `decodeJwtPayload` itself.

**Prefer decoding the `id_token`** (returned alongside `access_token` whenever the `openid` scope is
requested — see the `TokenResponse` type in step 3) for `sub`/`email`/`name`/`picture`: those are
standard claims the ID token carries by default, unlike the access token. Use the same
`decodeJwtPayload` function on it. If the UI also needs the user's Port record itself (team
memberships, org metadata) rather than just the raw token claims, look the user up by email against
the Port API — look the user up by email with `getCurrentPortUser` in step 6 (`src/lib/portApi.ts`). **There is no `/v1/users/me`
endpoint**; don't request the user by id `"me"`.

```ts
import type { PortUser } from '../types/port';

export function decodeJwtPayload(token: string): Record<string, unknown> {
	const [, payload] = token.split('.');
	const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
	const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
	// Decode as bytes, not atob's raw string, so multi-byte UTF-8 names/claims survive intact.
	const bytes = Uint8Array.from(atob(padded), (c) => c.charCodeAt(0));
	return JSON.parse(new TextDecoder().decode(bytes));
}

// Adjust the namespaced keys below to match the claims your Auth0 tenant actually issues.
export function extractPortUser(payload: Record<string, unknown>): PortUser {
	return {
		identifier: String(payload.sub ?? ''),
		email: String(payload['https://getport.io/email'] ?? ''),
		firstName: payload['https://getport.io/firstName'] as string | undefined,
		lastName: payload['https://getport.io/lastName'] as string | undefined,
		picture: payload.picture as string | undefined,
		teams: payload['https://getport.io/teams'] as string[] | undefined,
	};
}
```

## 3. `src/contexts/PortAuthContext.tsx`

```tsx
import { type ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react';

import { decodeJwtPayload, extractPortUser } from '../lib/jwt';
import type { PortAuthState } from '../types/port';

// Fill in from the app registered per `references/registering-the-app.md` — never invent these values.
const AUTH0_DOMAIN = '{AUTH0_DOMAIN}';
const CLIENT_ID = '{CLIENT_ID}';
// Same value as PORT_API_BASE in src/lib/portApi.ts (step 6) — Port's API validates the JWT `aud`
// claim against its own base URL, so that's what /authorize must request as `audience` too.
const PORT_API_BASE = '{PORT_API_BASE}';
const REDIRECT_URI = `${window.location.origin}/callback`;

type TokenResponse = { access_token: string; id_token?: string; refresh_token?: string; expires_in: number };

interface PortAuthContextValue extends PortAuthState {
	login: () => Promise<void>;
	logout: () => void;
	exchangeCodeForTokens: (code: string, verifier: string) => Promise<TokenResponse | null>;
}

const PortAuthContext = createContext<PortAuthContextValue | undefined>(undefined);

async function sha256Base64Url(input: string) {
	const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
	return btoa(String.fromCharCode(...new Uint8Array(digest)))
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');
}

// Used for both the PKCE `code_verifier` and the separate OAuth `state` nonce — two independent calls.
function randomUrlSafeString() {
	const bytes = crypto.getRandomValues(new Uint8Array(48));
	return btoa(String.fromCharCode(...bytes))
		.replace(/\+/g, '-')
		.replace(/\//g, '_')
		.replace(/=+$/, '');
}

// Module-level so every mount of the provider shares one in-flight refresh (see attemptRefresh).
let refreshInFlight: Promise<void> | null = null;

export function PortAuthProvider({ children }: { children: ReactNode }) {
	const [state, setState] = useState<PortAuthState>({
		isAuthenticated: false,
		user: null,
		accessToken: null,
		loading: true,
		error: null,
	});

	// The in-flight popup login. Held in memory only — the verifier must never reach a URL, and the
	// opener window (this one) outlives the popup's trip through Auth0.
	const pendingLoginRef = useRef<{ verifier: string; state: string; popup: Window } | null>(null);

	// Shared by the mount check below and by the cross-window sync effect further down —
	// re-reads whatever's currently in localStorage and applies it to this window's state.
	function syncFromStorage() {
		const accessToken = localStorage.getItem('port_access_token');
		const idToken = localStorage.getItem('port_id_token');
		const expiresAt = Number(localStorage.getItem('port_expires_at') ?? 0);

		if (accessToken && Date.now() < expiresAt) {
			// Prefer id_token for profile claims (email, name, picture); fall back to access token if unavailable.
			const user = extractPortUser(decodeJwtPayload(idToken ?? accessToken));
			setState((s) => ({ ...s, isAuthenticated: true, accessToken, user, loading: false }));
		} else {
			setState((s) => (s.isAuthenticated ? { ...s, isAuthenticated: false, accessToken: null, user: null } : s));
		}
	}

	useEffect(() => {
		const accessToken = localStorage.getItem('port_access_token');
		const expiresAt = Number(localStorage.getItem('port_expires_at') ?? 0);

		if (accessToken && Date.now() < expiresAt) {
			syncFromStorage();
		} else {
			// Prefer a silent refresh over an immediate logout — the app's refresh_token grant is
			// enabled, so requesting offline_access should return a refresh token once the user
			// has logged in at least once. Verify this on your tenant.
			attemptRefresh().finally(() => setState((s) => ({ ...s, loading: false })));
		}
	}, []);

	// The popup opened by login() (see `references/popup-login-explained.md`) only relays the `code` and
	// `state` it received from Auth0 back here via postMessage. This window checks them against the
	// login it started, then does the exchange with the verifier it kept in memory. This effect also
	// covers plain multi-tab use — logging in or out in one tab updates every other open tab.
	useEffect(() => {
		function handleMessage(event: MessageEvent) {
			if (event.origin !== window.location.origin) return;
			if (event.data?.type !== 'port-auth-code') return;

			const pending = pendingLoginRef.current;
			// Ignore anything that isn't the popup we opened, carrying the `state` we generated. A
			// forged /callback?code=…&state=… link matches no pending login and is dropped here.
			if (!pending || event.source !== pending.popup || event.data.state !== pending.state) return;

			// One-shot: clear first so the same code can never be replayed from this window.
			pendingLoginRef.current = null;

			// Auth0 sent the user back with `error` instead of `code` (e.g. consent denied).
			if (event.data.error || !event.data.code) {
				setState((s) => ({ ...s, error: 'Login was cancelled or failed — please try again.' }));
				return;
			}
			// A thrown fetch (network failure) must surface as an error too, not an unhandled rejection.
			exchangeCodeForTokens(event.data.code, pending.verifier).catch(() =>
				setState((s) => ({ ...s, error: 'Login failed — please try again.' })),
			);
		}
		function handleStorage(event: StorageEvent) {
			if (event.key === 'port_access_token' || event.key === 'port_expires_at') syncFromStorage();
		}
		function handleVisibility() {
			if (document.visibilityState === 'visible') syncFromStorage();
		}

		window.addEventListener('message', handleMessage);
		window.addEventListener('storage', handleStorage);
		document.addEventListener('visibilitychange', handleVisibility);
		return () => {
			window.removeEventListener('message', handleMessage);
			window.removeEventListener('storage', handleStorage);
			document.removeEventListener('visibilitychange', handleVisibility);
		};
	}, []);

	// Both calls below go through /api/port-token (step 3.5) rather than straight to
	// `https://${AUTH0_DOMAIN}/oauth/token` — Auth0 CORS-restricts that endpoint to the app's
	// registered Allowed Web Origins, and dynamic preview origins (e.g. *.lovable.app) are
	// typically not on that list, so a direct browser call fails with "Failed to fetch" even
	// though the /authorize redirect worked fine. The server route isn't subject to that CORS
	// check at all, since it's not a browser request.
	//
	// Refresh tokens rotate with no overlap period, so only one refresh may be in flight at a time:
	// a second concurrent use of the same token (StrictMode's double-run mount effect, or two tabs
	// opening at once) counts as reuse and Auth0 revokes the whole token family. The module-level
	// promise dedupes calls within this tab; it can't dedupe across tabs.
	function attemptRefresh(): Promise<void> {
		refreshInFlight ??= doRefresh().finally(() => {
			refreshInFlight = null;
		});
		return refreshInFlight;
	}

	async function doRefresh() {
		const refreshToken = localStorage.getItem('port_refresh_token');
		if (!refreshToken) return;

		const res = await fetch('/api/port-token', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ grant_type: 'refresh_token', refresh_token: refreshToken }),
		});
		if (!res.ok) return;
		await persistTokenResponse(await res.json());
	}

	async function persistTokenResponse(tokens: TokenResponse) {
		// The id_token carries standard profile claims (email, name, picture) by default; the
		// access_token usually doesn't unless the tenant copies them in via an Auth0 Action —
		// see the caveat in src/lib/jwt.ts. Persist it for later profile recovery.
		const user = extractPortUser(decodeJwtPayload(tokens.id_token ?? tokens.access_token));
		localStorage.setItem('port_access_token', tokens.access_token);
		if (tokens.id_token) localStorage.setItem('port_id_token', tokens.id_token);
		localStorage.setItem('port_expires_at', String(Date.now() + tokens.expires_in * 1000));
		if (tokens.refresh_token) localStorage.setItem('port_refresh_token', tokens.refresh_token);
		setState((s) => ({ ...s, isAuthenticated: true, accessToken: tokens.access_token, user, error: null }));
	}

	async function exchangeCodeForTokens(code: string, verifier: string) {
		const res = await fetch('/api/port-token', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				grant_type: 'authorization_code',
				code,
				redirect_uri: REDIRECT_URI,
				code_verifier: verifier,
			}),
		});
		if (!res.ok) {
			setState((s) => ({ ...s, error: 'Login failed — please try again.' }));
			return null;
		}
		const tokens: TokenResponse = await res.json();
		await persistTokenResponse(tokens);
		return tokens;
	}

	async function login() {
		// Always authenticate in a new window and hand control back to this one, rather than
		// navigating the app's own window/frame to Auth0. Open it synchronously, before any await, so
		// it's still inside this click handler's user-gesture window and popup blockers let it
		// through — its URL gets filled in below once the PKCE challenge is ready. This also happens
		// to be what makes login possible at all when this app is embedded in an iframe (a
		// Lovable/v0/bolt.new live-preview embed): Auth0's hosted login page refuses to be framed, so
		// redirecting the iframe itself would fail outright regardless.
		const popup = window.open('', '_blank');

		// Two independent random values. The verifier proves this window started the login and is
		// only ever sent to /oauth/token; `state` is the CSRF nonce that rides in the URLs. Putting the
		// verifier in `state` would expose it in the /authorize URL (history, logs) and defeat PKCE.
		const verifier = randomUrlSafeString();
		const oauthState = randomUrlSafeString();
		const challenge = await sha256Base64Url(verifier);

		const params = new URLSearchParams({
			client_id: CLIENT_ID,
			redirect_uri: REDIRECT_URI,
			response_type: 'code',
			scope: 'openid profile email offline_access',
			audience: PORT_API_BASE,
			code_challenge: challenge,
			code_challenge_method: 'S256',
			state: oauthState,
		});
		const authorizeUrl = `https://${AUTH0_DOMAIN}/authorize?${params}`;

		if (popup) {
			const pending = { verifier, state: oauthState, popup };
			pendingLoginRef.current = pending;
			popup.location.href = authorizeUrl;

			// If the user closes the popup without finishing, drop the pending login so the verifier
			// doesn't linger in memory. A successful relay clears the ref first, so this is a no-op then.
			const closedPoll = window.setInterval(() => {
				if (!popup.closed) return;
				window.clearInterval(closedPoll);
				if (pendingLoginRef.current === pending) pendingLoginRef.current = null;
			}, 500);
		} else if (window.top === window) {
			// Popup got blocked — fall back to a top-level redirect in this same window. The page
			// reloads on the way back, so memory won't survive: keep the pair in sessionStorage (same
			// window, same origin) and let AuthCallback read it and delete it. Last resort, not the default.
			sessionStorage.setItem('port_pending_login', JSON.stringify({ verifier, state: oauthState }));
			window.location.href = authorizeUrl;
		} else {
			// Blocked popup inside an iframe (e.g. a live-preview embed): redirecting would break out of
			// the whole embedding page and lose the pending login, so ask the user to allow popups instead.
			setState((s) => ({ ...s, error: 'Allow popups for this site to sign in.' }));
		}
	}

	function logout() {
		localStorage.removeItem('port_access_token');
		localStorage.removeItem('port_id_token');
		localStorage.removeItem('port_refresh_token');
		localStorage.removeItem('port_expires_at');
		setState({ isAuthenticated: false, user: null, accessToken: null, loading: false, error: null });
	}

	return (
		<PortAuthContext.Provider value={{ ...state, login, logout, exchangeCodeForTokens }}>
			{children}
		</PortAuthContext.Provider>
	);
}

export function usePortAuth() {
	const ctx = useContext(PortAuthContext);
	if (!ctx) throw new Error('usePortAuth must be used within PortAuthProvider');
	return ctx;
}
```

## 3.5. `src/pages/api/port-token.ts` — token exchange proxy

**Add this whenever the platform has a server runtime** (Next.js API routes shown here; the
equivalent is a Supabase/Vercel edge function, an Express route, etc. on other platforms). Auth0
enforces CORS on `/oauth/token` based on the app's registered **Allowed Web Origins** — a different
setting from the redirect URIs registered per `references/registering-the-app.md`, and one this skill's tools don't manage.
Dynamic preview origins (e.g. a `*.lovable.app` subdomain that changes per preview build) are
typically not on that list, so `PortAuthContext`'s calls to `/oauth/token` (step 3) would fail with a
bare `Failed to fetch` if made directly from the browser — even though the `/authorize` redirect
worked fine, since that step doesn't hit the same CORS-gated endpoint. This route does the
`/oauth/token` call server-side instead, where browser CORS doesn't apply, and simply forwards the
result back. It still sends **no `client_secret`** — this is still a PKCE public client, the route
exists only to relocate _where_ the HTTP call happens, not to add a confidential-client secret.

```ts
// Next.js App Router; adapt the request/response shape to the platform's actual server API.
import { NextRequest, NextResponse } from 'next/server';

const AUTH0_DOMAIN = '{AUTH0_DOMAIN}'; // same value as the client-side AUTH0_DOMAIN in step 3
const CLIENT_ID = '{CLIENT_ID}';

export async function POST(req: NextRequest) {
	const body = await req.json();
	// Only relay the two grants this app uses, and only the fields they need — don't spread the
	// request body, or this route becomes an open relay to /oauth/token.
	if (body.grant_type !== 'authorization_code' && body.grant_type !== 'refresh_token') {
		return NextResponse.json({ error: 'unsupported_grant_type' }, { status: 400 });
	}
	const params: Record<string, string> = { client_id: CLIENT_ID };
	for (const key of ['grant_type', 'code', 'code_verifier', 'redirect_uri', 'refresh_token']) {
		if (typeof body[key] === 'string') params[key] = body[key];
	}

	const res = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(params),
	});

	return NextResponse.json(await res.json(), { status: res.status });
}
```

## 4. `src/components/auth/AuthCallback.tsx`

Route the token exchange through `exchangeCodeForTokens` from the context (step 3) rather than
duplicating the `fetch`/`localStorage` logic here. This is what makes the redirect back to `/` land
on real authenticated content instead of `LoginPage` again: `exchangeCodeForTokens` updates
`PortAuthProvider`'s live React state, and since the SPA doesn't reload between `/callback` and `/`
(`navigate('/')` is a client-side transition, not a full page load), the same provider instance —
now with `isAuthenticated: true` — is what `Home` (step 7) reads immediately after.

`window.opener` tells the two cases apart. When it's set, this is the popup: it never sees the
verifier and does no exchange, it only relays the `code` and `state` Auth0 returned to the opener
via `postMessage` and closes itself. The opener (`PortAuthProvider`, step 3) checks `state` against
the login it started and exchanges the code with the verifier it kept in memory. Only if the popup
was blocked does this load happen in the app's own top-level window; then the verifier and `state`
come from the `sessionStorage` entry `login()` wrote just before redirecting, and are deleted as
soon as they're read.

```tsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { usePortAuth } from '../../contexts/PortAuthContext';

export function AuthCallback() {
	const navigate = useNavigate();
	const { exchangeCodeForTokens } = usePortAuth();
	const hasRunRef = useRef(false);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const code = params.get('code');
		const authError = params.get('error');
		const returnedState = params.get('state');
		// Auth0 returns `error` (no `code`) when the user denies consent or login fails — still relay it
		// from the popup so the opener can show an error and close this window, instead of stranding it.
		if (!returnedState || (!code && !authError)) {
			navigate('/');
			return;
		}

		// Guard against re-running when exchangeCodeForTokens changes identity: the function
		// is recreated every render, so including it in dependencies would re-run this effect
		// and replay the one-time auth code. Use a ref to run once per mount instead.
		if (hasRunRef.current) return;
		hasRunRef.current = true;

		if (window.opener) {
			// Popup: relay only. The opener holds the verifier and validates `state`.
			window.opener.postMessage(
				{ type: 'port-auth-code', code, error: authError, state: returnedState },
				window.location.origin,
			);
			window.close();
			return;
		}

		// Top-level fallback (popup was blocked): read and delete the pair login() stored.
		let pending: { verifier: string; state: string } | null = null;
		try {
			pending = JSON.parse(sessionStorage.getItem('port_pending_login') ?? 'null');
		} catch {
			// malformed entry — treated as no pending login below
		}
		sessionStorage.removeItem('port_pending_login');

		if (!code || !pending || pending.state !== returnedState) {
			navigate('/');
			return;
		}
		exchangeCodeForTokens(code, pending.verifier)
			.catch(() => null)
			.then(() => navigate('/'));
	}, [navigate]);

	return <div>Signing you in…</div>;
}
```

## 5. `src/components/auth/LoginPage.tsx`

**Default: use [login-page-anchor-ui.md](login-page-anchor-ui.md) instead of the block below**, so the UI is styled with Port's own component library and looks like Port itself. It needs `react`/`react-dom` `^19` and `tailwindcss` `^4.1.0` as peer dependencies.

Use this minimal, unstyled variant only if the app can't take those peer dependencies. It needs nothing but the `login` function from the context:

```tsx
import { usePortAuth } from '../../contexts/PortAuthContext';

export function LoginPage() {
	const { login, error } = usePortAuth();
	return (
		<div>
			{error && <p>{error}</p>}
			<button onClick={login}>Log in with Port</button>
		</div>
	);
}
```

## 6. `src/lib/portApi.ts`

Call `{PORT_API_BASE}` directly from the browser — see `references/pkce-flow.md` (Calling the Port API): once the app's
redirect URI is registered, its origin is dynamically CORS-allowed, so no proxy is needed for the
common case.

```ts
const PORT_API_BASE = '{PORT_API_BASE}';

export async function callPortApi(path: string, accessToken: string, options: RequestInit = {}) {
	return fetch(`${PORT_API_BASE}${path}`, {
		...options,
		headers: {
			...options.headers,
			Authorization: `Bearer ${accessToken}`,
			'Content-Type': 'application/json',
		},
	});
}

// There is no /v1/users/me — Port has no notion of "the current user" as an id. Look the user
// up by the email decoded from their id_token (see src/lib/jwt.ts) instead. Requesting id "me"
// 404s with `User with id "me" was not found`.
export async function getCurrentPortUser(email: string, accessToken: string) {
	const res = await callPortApi(`/v1/users/${encodeURIComponent(email)}`, accessToken);
	if (!res.ok) return null;
	return res.json();
}
```

If this fails with a CORS error, it's one of the two things `references/pkce-flow.md` (Calling the Port API) calls out: either
the allowlist hasn't propagated yet (registered/updated the app in the last ~30s — wait and retry), or
this origin doesn't match any of the app's registered redirect URIs, in which case fall back to the
proxy in [port-proxy-fallback.md](port-proxy-fallback.md) instead.

## 7. `src/App.tsx` wiring

If `LoginPage.tsx` was built with `@port-labs/anchor-ui` (see [login-page-anchor-ui.md](login-page-anchor-ui.md)),
keep the stylesheet import below, before any other styles. Otherwise drop that line.

The `/` route must gate on `isAuthenticated` (and `loading`, while the mount-time check/silent
refresh from `PortAuthContext` is still in flight) — otherwise a signed-in user who lands back on
`/` after `/callback` just sees `LoginPage` again. Swap `<div>Signed in.</div>` below for whatever
authenticated content the app actually needs; that's downstream app functionality, not part of this
auth skeleton.

```tsx
import '@port-labs/anchor-ui/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthCallback } from './components/auth/AuthCallback';
import { LoginPage } from './components/auth/LoginPage';
import { PortAuthProvider, usePortAuth } from './contexts/PortAuthContext';

function Home() {
	const { isAuthenticated, loading } = usePortAuth();
	if (loading) return <div>Loading…</div>;
	if (!isAuthenticated) return <LoginPage />;
	return <div>Signed in.</div>; // replace with the app's real authenticated content
}

export default function App() {
	return (
		<PortAuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/callback" element={<AuthCallback />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</PortAuthProvider>
	);
}
```
