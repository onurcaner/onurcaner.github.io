import { type ReactElement, type RefObject } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { SectionName } from '@/constants/SectionName.ts';

import { SectionHeading } from './SectionHeading.tsx';

export function SectionLayout({
  sectionRef,
  sectionName,
  sectionIconName,
  sectionTitle,
  children,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  sectionName: SectionName;
  sectionIconName: IconName;
  sectionTitle: string;
  children: ReactElement;
}): ReactElement {
  return (
    <section
      className="relative grid min-h-screen content-center items-center py-40"
      ref={sectionRef}
      id={sectionName}
    >
      <div className="mb-10 grid grid-cols-[minmax(0,1fr)_max-content] items-center">
        <SectionHeading iconName={sectionIconName}>
          {sectionTitle}
        </SectionHeading>
        <div className="text-pink-200">Filters...</div>
      </div>

      {children}
    </section>
  );
}
