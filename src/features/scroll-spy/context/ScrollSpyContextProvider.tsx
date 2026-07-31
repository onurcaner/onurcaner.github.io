import { useScroll } from 'motion/react';
import { type ReactElement, type ReactNode } from 'react';

import { type DomRefsContextState } from '@/contexts/global/dom-refs/types/DomRefsContextState.ts';
import { ScrollSpyContext } from '@/features/scroll-spy/context/ScrollSpyContext.tsx';

export function ScrollSpyContextProvider({
  children,
  domRefs,
}: {
  children: ReactNode;
  domRefs: DomRefsContextState;
}): ReactElement {
  const heroScrollSpy = useScroll({
    target: domRefs.heroSectionRef,
    axis: 'y',
  });

  return (
    <ScrollSpyContext value={{ heroScrollSpy: heroScrollSpy }}>
      {children}
    </ScrollSpyContext>
  );
}
