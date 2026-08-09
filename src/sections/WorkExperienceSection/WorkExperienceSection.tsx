import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';

import { SectionLayout } from '../_components/SectionLayout.tsx';

import { WorkExperiencesList } from './WorkExperiencesList.tsx';

export function WorkExperienceSection(): ReactElement {
  const { workExperienceSectionRef } = useDomRefsContext();

  return (
    <SectionLayout
      sectionRef={workExperienceSectionRef}
      sectionIconName={IconName.BriefCase}
      sectionTitle={'Work Experience'}
    >
      <WorkExperiencesList />
    </SectionLayout>
  );
}
