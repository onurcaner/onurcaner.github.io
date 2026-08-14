import { useMotionValueEvent, useScroll } from 'motion/react';
import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';

import { SectionLayout } from '../_components/SectionLayout.tsx';

import { SkillsList } from './SkillsList.tsx';

export function SkillsSection(): ReactElement {
  // Hooks - Elevated States
  const { skillsSectionRef } = useDomRefsContext();
  const { skillsSectionScrollYProgressMotionValue } = useScrollSpyContext();

  // Motion Hooks - Scroll Subscription
  const { scrollYProgress: scrollYProgressMotionValue } = useScroll({
    target: skillsSectionRef,
    offset: ['start end', 'end start'],
    axis: 'y',
  });
  useMotionValueEvent(
    scrollYProgressMotionValue,
    'change',
    (scrollYProgress) => {
      skillsSectionScrollYProgressMotionValue.set(scrollYProgress);
    },
  );

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
