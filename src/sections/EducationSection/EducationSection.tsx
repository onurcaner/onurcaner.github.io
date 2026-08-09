import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';

import { SectionLayout } from '../_components/SectionLayout.tsx';

import { EducationsList } from './EducationsList.tsx';

export function EducationSection(): ReactElement {
  const { educationSectionRef } = useDomRefsContext();

  return (
    <SectionLayout
      sectionRef={educationSectionRef}
      sectionIconName={IconName.GraduationCap}
      sectionTitle={'Education'}
    >
      <EducationsList />
    </SectionLayout>
  );
}
