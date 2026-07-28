import { type ReactElement, type ReactNode } from 'react';

import { DomRefsContextProvider } from '@/contexts/global/dom-refs/DomRefsContextProvider.tsx';
import { RGBControllerContextProvider } from '@/features/rgb/contexts/RGBControllerContextProvider.tsx';
import { ThemeControllerContextProvider } from '@/features/theme/contexts/ThemeControllerContextProvider.tsx';
import { useThemeControllerContext } from '@/features/theme/contexts/useThemeControllerContext.ts';

export function GlobalContextsProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <DomRefsContextProvider>
      <ThemeControllerContextProvider>
        <RGBControllerContextProviderBridge>
          {children}
        </RGBControllerContextProviderBridge>
      </ThemeControllerContextProvider>
    </DomRefsContextProvider>
  );
}

function RGBControllerContextProviderBridge({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const { rgbControllerConfig } = useThemeControllerContext();

  return (
    <RGBControllerContextProvider rgbControllerConfig={rgbControllerConfig}>
      {children}
    </RGBControllerContextProvider>
  );
}
