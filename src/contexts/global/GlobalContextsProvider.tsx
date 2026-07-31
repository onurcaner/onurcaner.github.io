import { type ReactElement, type ReactNode } from 'react';

import { DomRefsContextProvider } from '@/contexts/global/dom-refs/contexts/DomRefsContextProvider.tsx';
import { useDomRefsContext } from '@/contexts/global/dom-refs/contexts/useDomRefsContext.tsx';
import { RGBControllerContextProvider } from '@/features/rgb/contexts/RGBControllerContextProvider.tsx';
import { ScrollSpyContextProvider } from '@/features/scroll-spy/context/ScrollSpyContextProvider.tsx';
import { ThemeContextProvider } from '@/features/theme/contexts/ThemeContextProvider.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function GlobalContextsProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <DomRefsContextProvider>
      <ScrollSpyContextProviderBridge>
        <ThemeContextProvider>
          <RGBControllerContextProviderBridge>
            {children}
          </RGBControllerContextProviderBridge>
        </ThemeContextProvider>
      </ScrollSpyContextProviderBridge>
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

// Depends on DomRefsContext
function ScrollSpyContextProviderBridge({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const domRefs = useDomRefsContext();

  return (
    <ScrollSpyContextProvider domRefs={domRefs}>
      {children}
    </ScrollSpyContextProvider>
  );
}
