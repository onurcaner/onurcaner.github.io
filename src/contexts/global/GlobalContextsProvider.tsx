import { type ReactElement, type ReactNode } from 'react';

import { ElementsRefContextProvider } from '@/contexts/global/ref/ElementsRefContextProvider.tsx';
import { RGBControllerContextProvider } from '@/features/rgb/contexts/RGBControllerContextProvider.tsx';

export function GlobalContextsProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <ElementsRefContextProvider>
      <RGBControllerContextProvider>{children}</RGBControllerContextProvider>
    </ElementsRefContextProvider>
  );
}
