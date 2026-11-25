# Optional fallback: `supabase/functions/port-proxy/index.ts`

Only needed when step 6 of [spa-example.md](spa-example.md) can't work, i.e. the UI calls the Port API from an origin that doesn't match any of the app's registered redirect URIs (uncommon, but possible on hosted app-builder platforms that expose multiple origins per app). Otherwise skip it. `PORT_API_BASE` here is a server-side config value for the region confirmed per [../references/registering-the-app.md](../references/registering-the-app.md) (e.g. a Supabase secret/env var), not hardcoded, and never the browser-facing `{PORT_API_BASE}` placeholder used client-side.

**This function's own route must be publicly reachable — not gated behind the hosting platform's
preview/staging access control.** If it is, calls fail before ever reaching this code, and the
browser just sees a bare `Forbidden` that's easy to mistake for a Port API rejection or a CORS
problem. Same reachability requirement as the OAuth `redirect_uri` in [registering-the-app.md](../references/registering-the-app.md).

```ts
import { serve } from 'https://deno.land/std/http/server.ts';

const PORT_API_BASE = Deno.env.get('PORT_API_BASE') ?? '{PORT_API_BASE}';

const CORS_HEADERS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'authorization, x-port-token, content-type',
	'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
};

serve(async (req) => {
	if (req.method === 'OPTIONS') {
		return new Response(null, { headers: CORS_HEADERS });
	}

	const path = new URL(req.url).searchParams.get('path');
	const token = req.headers.get('x-port-token');
	if (!path || !token) {
		return new Response('Missing path or x-port-token', { status: 400, headers: CORS_HEADERS });
	}

	const upstream = await fetch(`${PORT_API_BASE}${path}`, {
		method: req.method,
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		body: ['GET', 'HEAD'].includes(req.method) ? undefined : await req.text(),
	});

	return new Response(upstream.body, {
		status: upstream.status,
		headers: { ...CORS_HEADERS, 'Content-Type': upstream.headers.get('Content-Type') ?? 'application/json' },
	});
});
```
