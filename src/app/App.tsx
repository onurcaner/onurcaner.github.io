import { type ReactElement, Suspense } from 'react';

import { AppQueryClientProvider } from '@/contexts/remote/_components/AppQueryClientProvider.tsx';
import '@/css/base-theme.css';
import '@/css/tailwind.css';
import { AppRouter } from '@/router/components/AppRouter.tsx';

export function App(): ReactElement {
  return (
    <AppQueryClientProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <AppRouter />
      </Suspense>
    </AppQueryClientProvider>
  );
}
