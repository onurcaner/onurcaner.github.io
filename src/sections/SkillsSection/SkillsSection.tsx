import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';

import { SectionLayout } from '../_components/SectionLayout.tsx';

import { SkillsList } from './SkillsList.tsx';

export function SkillsSection(): ReactElement {
  const { skillsSectionRef } = useDomRefsContext();

  return (
    <SectionLayout
      sectionRef={skillsSectionRef}
      sectionIconName={IconName.Box}
      sectionTitle={'Skills'}
    >
      <SkillsList />
    </SectionLayout>
  );
}
