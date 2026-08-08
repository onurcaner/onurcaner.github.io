import { type ReactElement, type ReactNode } from 'react';

import { RGBControllerContextProvider } from '@/features/rgb/contexts/RGBControllerContextProvider.tsx';
import { ThemeContextProvider } from '@/features/theme/contexts/ThemeContextProvider.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { DomRefsContextProvider } from './dom-refs/DomRefsContextProvider.tsx';

export function GlobalContextsProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <DomRefsContextProvider>
      <ThemeContextProvider>
        <RGBControllerContextProviderBridge>
          {children}
        </RGBControllerContextProviderBridge>
      </ThemeContextProvider>
    </DomRefsContextProvider>
  );
}

// Depends on ThemeContext
function RGBControllerContextProviderBridge({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const { rgbControllerConfig } = useThemeContext();

  return (
    <RGBControllerContextProvider rgbControllerConfig={rgbControllerConfig}>
      {children}
    </RGBControllerContextProvider>
  );
}
