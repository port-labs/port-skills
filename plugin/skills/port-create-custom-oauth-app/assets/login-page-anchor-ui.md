# Styled LoginPage with `@port-labs/anchor-ui`

Styled `LoginPage` for step 5 of [spa-example.md](spa-example.md). This is the default; use the minimal variant only if the app can't take the peer dependencies.

`@port-labs/anchor-ui` (npm, public) is Port's own component library. It requires `react`/`react-dom` `^19` and
`tailwindcss` `^4.1.0` as peer dependencies; check the user's app already has
compatible versions before adding it.

```bash
npm install @port-labs/anchor-ui
```

Import its stylesheet once at the app's entry point (`App.tsx`, step 7 of the example), before any other styles, then use its `Button` and `Typography` components. Their styling is bundled in that stylesheet, so no extra Tailwind config is needed in the consuming app:

```tsx
import { Button, Typography } from '@port-labs/anchor-ui';

import { usePortAuth } from '../../contexts/PortAuthContext';

export function LoginPage() {
	const { login, error } = usePortAuth();
	return (
		<div
			style={{
				display: 'flex',
				height: '100vh',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '1rem',
			}}
		>
			<Typography variant="h2">Sign in to continue</Typography>
			{error && <Typography variant="body1">{error}</Typography>}
			<Button variant="contained" size="large" onClick={login}>
				Log in with Port
			</Button>
		</div>
	);
}
```

`App.tsx` needs this import at the top:

```tsx
import '@port-labs/anchor-ui/styles.css';
```
