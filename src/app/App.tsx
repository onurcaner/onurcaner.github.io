import { type ReactElement, Suspense } from 'react';

import { GlobalContextsProvider } from '@/contexts/global/GlobalContextsProvider.tsx';
import { RemoteContextsProvider } from '@/contexts/remote/_components/RemoteContextsProvider.tsx';
import { AppRouter } from '@/router/components/AppRouter.tsx';
import '@/styling/css/tailwind-base.css';
import '@/styling/css/theme-vars-base.css';
import '@/styling/css/theme-vars-colors.css';
import '@/styling/css/theme-vars-components.css';

export function App(): ReactElement {
  return (
    <GlobalContextsProvider>
      <RemoteContextsProvider>
        <Suspense fallback={<Loading />}>
          <AppRouter />
        </Suspense>
      </RemoteContextsProvider>
    </GlobalContextsProvider>
  );
}

function Loading(): ReactElement {
  return (
    <div className="grid h-screen w-screen content-center items-center justify-center justify-items-center bg-(--theme-component-hero-section-background-color)">
      <div className="mb-10 h-40 w-40 animate-spin rounded-full border-[2rem] border-(--theme-component-hero-section-description-text-color) border-b-transparent" />
      <p className="text-10 mb-8 text-(--theme-component-hero-section-description-text-color)">
        Loading...
      </p>
      <p className="text-8 mb-4 text-(--theme-component-hero-section-description-text-color)">
        This page is still under development.
      </p>
      <p className="text-8 text-(--theme-component-hero-section-description-text-color)">
        The contents might be outdated.
      </p>
    </div>
  );
}
