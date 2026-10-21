# PKCE flow and calling the Port API

Implement the Authorization Code + PKCE grant in the UI. **Default to a popup,
not a top-level redirect.** Clicking "sign in" opens a new window, the user
authenticates there, the popup closes itself, and the original window ends up
authenticated. Never navigate the app's own window or frame to Auth0.

`{AUTH0_DOMAIN}` and `{PORT_API_BASE}` below come from the region the user
confirmed, see [registering-the-app.md](registering-the-app.md). Only the two
production values are documented. Never invent or hardcode a domain for
staging or any other environment, ask the user. The same applies to any
namespaced JWT claim names the access token carries.

## The flow

1. Generate a random `code_verifier` and, separately, a random `state`
   nonce. Keep both in memory in the window that starts the login (the
   opener). **Never put the verifier in `state` or any other URL**: the
   `/authorize` URL ends up in history and logs, and a visible verifier no
   longer protects the `code`.
2. Derive `code_challenge = base64url(SHA-256(code_verifier))`.
3. In the click handler, open a new window synchronously (before any `await`,
   so popup blockers don't block it), then navigate it to
   `https://{AUTH0_DOMAIN}/authorize` with `client_id`, a `redirect_uri` that
   **exactly matches** a registered URI, `response_type=code`,
   `code_challenge`, `code_challenge_method=S256`, `state=<the random state
   nonce>`, the scopes the flow needs, and `audience={PORT_API_BASE}`. Without
   the audience, Auth0 may return an access token that isn't scoped to the
   Port API. Only fall back to redirecting the current window if the popup
   was blocked.
4. The popup's callback route only relays the returned `code` and `state` to
   the original window via `window.opener.postMessage` (target origin = the
   app's own origin) and closes itself. The original window checks that the
   message came from the popup it opened and that `state` matches the one it
   generated, then exchanges the `code`: `grant_type=authorization_code`,
   `code`, `redirect_uri`, `client_id`, and the in-memory `code_verifier`.
   Omit `client_secret`, that is correct, not a mistake. If the popup was
   blocked and the app is the top-level window, fall back to a redirect and
   keep `{ verifier, state }` in `sessionStorage` for the callback to read
   and delete. Inside an iframe, don't redirect: ask the user to allow
   popups.

Popup login is the flow for every environment. It is also what makes login
possible at all inside an iframe (a live-preview embed in Lovable, v0, or
bolt.new), because Auth0's hosted login page refuses to be framed.

## Token exchange from a server route

**Do the `/oauth/token` call from a server route when the platform has one.**
Auth0 enforces CORS on `/oauth/token` using the app's **Allowed Web
Origins**, a setting separate from the redirect URIs and one this skill's
tools don't manage. Dynamic preview origins (for example a `*.lovable.app`
subdomain that changes per build) are typically not on that list, so a direct
browser call fails with a bare `Failed to fetch` even though the redirect
worked.

On any full-stack platform (Next.js API routes, a Lovable/Supabase edge
function), add a route such as `POST /api/port-token` that takes
`{ code, verifier, redirect_uri }` and does the exchange server-side. A
server-to-server call isn't subject to browser CORS. Only call
`/oauth/token` from the browser if the platform has no server runtime. A
worked example is in [../assets/spa-example.md](../assets/spa-example.md).

**Security note:** the example stores `access_token`, `id_token` and the (long-lived) `refresh_token` in `localStorage`, so any XSS on the app's origin can read them. Keep third-party scripts to a minimum, and don't treat the refresh token as safe from page-level compromise.

## The logged-in user

Decode the `id_token` returned with `access_token` (present once the `openid`
scope is requested) for standard profile claims: `sub`, `email`, `name`,
`picture`. **Port has no `/v1/users/me` endpoint**, requesting id `"me"`
returns `404: User with id "me" was not found`. If the flow needs the user's
Port record (team memberships and so on), look it up with
`GET {PORT_API_BASE}/v1/users/{email}` (URL-encode the email), using the email
from the decoded `id_token`.

## Styling

By default, style the login screen with Port's component library,
`@port-labs/anchor-ui` (npm, public) so the UI looks like Port. It needs
`react` and `react-dom` `^19` and `tailwindcss` `^4.1.0` as peer
dependencies. Fall back to a plain unstyled login screen only if the app
can't take them. The styled login page is in
[../assets/login-page-anchor-ui.md](../assets/login-page-anchor-ui.md).

## Calling the Port API

Once the app's redirect URI is registered, its **origin** is dynamically
CORS-allowed on the Port API. Call `{PORT_API_BASE}` directly from the browser
with `Authorization: Bearer <access token>`, no proxy needed in the common
case. Two things to account for:

- **Propagation delay.** The allowlist is polled roughly every 30 seconds, so
  a call right after registering or updating the app can fail with a CORS
  error for a short window. Wait and retry before assuming a misconfiguration.
- **The calling origin must match a registered redirect URI.** The allowlist
  is derived from each app's `redirectUris`. If the UI calls the API from a
  different origin than any registered one (possible on platforms exposing
  several origins per app), that call needs a same-origin server-side proxy.
  See [../assets/port-proxy-fallback.md](../assets/port-proxy-fallback.md).

## Verification checklist

Before telling the user it's done, check the code you wrote against every
line, explicitly:

- [ ] Every `{AUTH0_DOMAIN}`, `{PORT_API_BASE}`, and `{CLIENT_ID}` came from
      the region table (EU/US production only) or from the user. None were
      guessed or copied from another environment.
- [ ] `audience={PORT_API_BASE}` is on the `/authorize` call.
- [ ] `login()` opens a new window and navigates *that* window to
      `/authorize`. The app's own window is only redirected as the
      popup-blocked fallback, and then only when the app is the top-level
      window, never inside an iframe.
- [ ] The `code_verifier` is never in a URL or in `state`. `state` is a
      separate random nonce, and the verifier stays in the opener's memory
      (or, only in the popup-blocked top-level fallback, a `sessionStorage`
      entry deleted on read).
- [ ] The callback route reads `code` and `state` from the URL and, when
      `window.opener` is set, only `postMessage`s them to the opener and
      closes itself. The opener verifies `event.origin`, that `event.source`
      is its popup, and that `state` matches before exchanging the `code`.
- [ ] The `/oauth/token` call is made from a server route when the platform
      has one.
- [ ] Nothing calls `/v1/users/me`.
- [ ] `upsert` and `revoke` calls use the app's `id` as `appId`, never its
      `clientId`.
- [ ] No `client_secret` appears in the frontend code or the exchange route.

If a box can't be checked, fix the code first. Don't note it as a caveat.

Then tell the user they can publish the app and should share the published
URL so it can be registered as a redirect URI, see
[registering-the-app.md#managing-apps](registering-the-app.md#managing-apps).
This also extends the CORS allowlist to the published origin once the update
propagates.
