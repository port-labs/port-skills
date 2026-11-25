# Popup login flow, explained

Why the React example in [../assets/spa-example.md](../assets/spa-example.md) logs in the way it does. Read this before changing `login()`, `AuthCallback`, or the `message` listener in `PortAuthProvider`.

Login always opens in a new window rather than navigating the app's own window/frame to Auth0 —
this isn't a special case for embedded apps, it's the default for every environment:

- **`login()` (step 3 of the example)** generates two independent random values: the PKCE `code_verifier` and the
  OAuth `state` nonce. It keeps both in memory (a ref, together with the popup it opened) and sends
  only the `code_challenge` and `state` to Auth0. The verifier never appears in a URL.
- **`AuthCallback` (step 4 of the example)** detects it's running in that popup via `window.opener`, `postMessage`s
  the returned `code` and `state` to the opener, and closes itself. It does no token exchange — the
  opener's `PortAuthContext` is a separate window with its own React tree and is the one holding the
  verifier. Never open the popup with `noopener`/`noreferrer` — that nulls `window.opener` and makes
  this handoff impossible.
- **`PortAuthProvider` (step 3 of the example)** listens for that `message`. It validates `event.origin`, that
  `event.source` is the popup it opened, and that `state` matches the login in flight, before
  exchanging the code with the in-memory verifier. It also listens for `storage` and
  `visibilitychange` events, so any open tab/window picks up an auth change made elsewhere —
  including plain multi-tab use.

If the popup itself gets blocked and the app is the top-level window, `login()` falls back to a
redirect in the same window instead (see step 3 of the example). The page reloads on the way back, so that path
alone stores `{ verifier, state }` in `sessionStorage` and `AuthCallback` deletes it on read. Inside
an iframe there is no redirect fallback: ask the user to allow popups.

**This same, unconditional popup default is also what makes login possible at all when the app is
embedded in an iframe** (a live-preview embed in Lovable, v0, or bolt.new): Auth0's hosted login
page can't be framed — it responds with `X-Frame-Options: SAMEORIGIN`, and the browser refuses the
request outright (Chrome shows `"<domain> refused to connect"`, its literal wording for a page
blocking `X-Frame-Options`/CSP `frame-ancestors` framing, not a DNS or wrong-domain problem). Since
the flow never redirects the iframe itself, this failure mode never comes up — no iframe detection
is needed to decide whether to pop up (always do). The one and only place `login()` looks at
`window.top === window` is the popup-blocked fallback: top-level gets the redirect, an iframe gets
an "Allow popups" error, because redirecting would break out of the whole embedding page (the
editor UI, not just this app's iframe) and lose the pending login.
