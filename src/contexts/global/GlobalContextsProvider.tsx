import { type ReactElement, type ReactNode } from 'react';

import { RGBControllerContextProvider } from '@/features/rgb/contexts/RGBControllerContextProvider.tsx';
import { ScrollSpyContextProvider } from '@/features/scroll-spy/contexts/ScrollSpyContextProvider.tsx';
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
      <ScrollSpyContextProvider>
        <ThemeContextProvider>
          <RGBControllerContextProviderBridge>
            {children}
          </RGBControllerContextProviderBridge>
        </ThemeContextProvider>
      </ScrollSpyContextProvider>
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
