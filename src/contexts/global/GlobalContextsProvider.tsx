import { type ReactElement, type ReactNode } from 'react';

import { ElementsRefContextProvider } from '@/contexts/global/ref/ElementsRefContextProvider.tsx';

export function GlobalContextsProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <ElementsRefContextProvider>{children}</ElementsRefContextProvider>;
}
