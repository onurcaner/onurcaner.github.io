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
      className="relative grid min-h-screen content-center items-center py-40"
      ref={sectionRef}
    >
      <div className="flex items-center justify-between">
        <SectionHeading iconName={sectionIconName}>
          {sectionTitle}
        </SectionHeading>
        <div className="text-pink-200">Filters...</div>
      </div>

      {children}
    </section>
  );
}
