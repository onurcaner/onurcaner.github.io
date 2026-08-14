import { type ReactElement, type ReactNode, useRef } from 'react';

import { DomRefsContext } from './DomRefsContext.tsx';

export function DomRefsContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const headerRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const skillsSectionRef = useRef<HTMLElement | null>(null);
  const educationSectionRef = useRef<HTMLElement | null>(null);
  const experienceSectionRef = useRef<HTMLElement | null>(null);
  const callToActionSectionRef = useRef<HTMLElement | null>(null);

  return (
    <DomRefsContext
      value={{
        headerRef: headerRef,
        heroSectionRef: heroSectionRef,
        skillsSectionRef: skillsSectionRef,
        educationSectionRef: educationSectionRef,
        experienceSectionRef: experienceSectionRef,
        callToActionSectionRef: callToActionSectionRef,
      }}
    >
      {children}
    </DomRefsContext>
  );
}
