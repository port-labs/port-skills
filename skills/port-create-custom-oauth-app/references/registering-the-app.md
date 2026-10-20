# Registering the app

## Gather the inputs

Before calling any tool, ask the user for the following. Don't guess or
invent any of them.

1. **App name.** What to register the app as. Unique within the org, max 255
   characters.
2. **Redirect URI(s).** The exact absolute callback URL(s) the app will use,
   up to 5.
   - Hosted app-builder platforms (Lovable, v0, bolt.new) commonly expose more
     than one origin for the same app, for example a live-preview URL, a
     stable project URL, and a published URL. Register the ones the user
     tests from. The `redirect_uri` used at runtime must be the **published,
     publicly reachable** one: a live-preview origin is usually behind the
     platform's own login wall, so Auth0's redirect back to it never lands.
     That shows up as a `Callback URL mismatch` loop or an unreachable
     callback, easy to misdiagnose as a registration problem.
   - Add `http://localhost:<port>/callback` too if they also develop locally.
   - **Don't guess a platform's domain suffix from its name.** Lovable, for
     example, serves published apps from `<project>.lovable.app` but runs the
     in-editor preview from a different domain (`<project-id>.lovableproject.com`
     as of this writing). Have the user read `window.location.origin` in
     their browser devtools on the actual running app instead of inferring
     it. The scheme can change per platform and per environment.
3. **Port region or environment.** The Auth0 domain and API base differ:

   | Region | Auth0 domain (`{AUTH0_DOMAIN}`) | Port API base (`{PORT_API_BASE}`) |
   |---|---|---|
   | EU production | `auth.getport.io` | `https://api.getport.io` |
   | US production | `auth.us.getport.io` | `https://api.us.port.io` |
   | Anything else (staging, self-hosted) | ask the user, have them check the domain their own Port login page uses | same, ask the user |

   The Auth0 `audience` to request is `{PORT_API_BASE}` itself, not a
   separately issued value. Port's API validates the JWT `aud` claim against
   its own base URL. **Never default to the production API base as the
   audience on another environment.** A mismatched audience doesn't fail
   quietly, Auth0 rejects it with `Service not found: <audience>`.

## Check existing apps

Call `list_external_interface_apps` first. Each org can register only a
limited number of apps, and the cap depends on the org's plan, so don't quote
a number. If the org is at its cap, creating a new app fails. Show the user
their existing apps and ask whether to reuse, update, or revoke one.

## Register

Call `upsert_external_interface_app({ name, redirectUris })` with `appId`
omitted.

- `name`: display name, unique within the org, max 255 characters.
- `redirectUris`: 1 to 5 **exact, absolute, non-wildcard** URIs. `https://`,
  or `http://` only for `localhost` / `127.0.0.1`. Duplicate, malformed, or
  wildcard URIs are rejected.

The response is `{ app: { id, clientId, name, redirectUris, createdAt, updatedAt } }`.

**`id` and `clientId` are different values.** `id` is what `upsert` (when
updating) and `revoke` expect as `appId`. `clientId` is the OAuth `client_id`
embedded in the frontend code. Passing `clientId` as `appId` fails parameter
validation.

**There is no client secret in the response and never will be.** `clientId` is
not sensitive and is safe to embed in frontend code, but it only works
together with one of the exact `redirectUris` registered in the same call.

## Managing apps

- `upsert_external_interface_app({ appId, name?, redirectUris? })`: pass
  `appId` to update an existing app. At least one of `name` or `redirectUris`
  is required. **`redirectUris` replaces the entire existing set, it is not
  merged**, so always pass the full list the app should end up with.
- `revoke_external_interface_app({ appId })`: permanently deletes the app and
  its underlying Auth0 client. Any UI built against it immediately loses the
  ability to authenticate. Confirm with the user before calling it.

Once the UI is published, ask for its published URL and add it with
`upsert_external_interface_app({ appId, redirectUris })`, including the URIs
already registered, not just the new one.

## Errors

| Situation | What happens |
|---|---|
| Org already at its plan-dependent app cap | Creating a new app fails. Check `list_external_interface_apps` first |
| Malformed, wildcard, or duplicate `redirectUris` | Request fails. Fix the URIs and retry |
| Name already taken in the org | Request fails. Pick a different name |
| `appId` doesn't exist | `upsert` (updating) and `revoke` fail. Re-check via `list_external_interface_apps` |
| `clientId` passed where `appId` is expected | `upsert` and `revoke` fail parameter validation. Use the `id` field |
| Caller is not an org admin | All three tools return an org-admin-required error |
