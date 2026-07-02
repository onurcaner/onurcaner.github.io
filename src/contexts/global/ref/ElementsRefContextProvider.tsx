import { type ReactElement, type ReactNode, useRef } from 'react';

import { ElementsRefContext } from '@/contexts/global/ref/ElementsRefContext.tsx';

export function ElementsRefContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const headerRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  return (
    <ElementsRefContext
      value={{
        headerRef,
        heroSectionRef,
      }}
    >
      {children}
    </ElementsRefContext>
  );
}
