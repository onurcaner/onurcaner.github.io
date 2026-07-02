import { type ReactElement, Suspense } from 'react';

import { GlobalContextsProvider } from '@/contexts/global/GlobalContextsProvider.tsx';
import { AppQueryClientProvider } from '@/contexts/remote/_components/AppQueryClientProvider.tsx';
import { AppRouter } from '@/router/components/AppRouter.tsx';
import '@/styling/css/tailwind-base.css';
import '@/styling/css/theme-vars-base.css';
import '@/styling/css/theme-vars-colors.css';
import '@/styling/css/theme-vars-components.css';

export function App(): ReactElement {
  return (
    <GlobalContextsProvider>
      <AppQueryClientProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <AppRouter />
        </Suspense>
      </AppQueryClientProvider>
    </GlobalContextsProvider>
  );
}
