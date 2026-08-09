import { type ReactElement, type RefObject } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';

import { SectionHeading } from './SectionHeading.tsx';

export function SectionLayout({
  sectionRef,
  sectionIconName,
  sectionTitle,
  children,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  sectionIconName: IconName;
  sectionTitle: string;
  children: ReactElement;
}): ReactElement {
  return (
    <section
      className="relative z-0 grid min-h-screen content-center items-center py-40"
      ref={sectionRef}
    >
      <SectionHeading className="justify-self-start" iconName={sectionIconName}>
        {sectionTitle}
      </SectionHeading>

      {children}
    </section>
  );
}
