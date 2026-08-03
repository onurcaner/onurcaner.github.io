import { type ReactElement, type ReactNode, useRef } from 'react';

import { DomRefsContext } from './DomRefsContext.tsx';

export function DomRefsContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const headerRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  return (
    <DomRefsContext
      value={{
        headerRef: headerRef,
        heroSectionRef: heroSectionRef,
      }}
    >
      {children}
    </DomRefsContext>
  );
}
