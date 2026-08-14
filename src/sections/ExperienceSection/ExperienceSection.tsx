import { useMotionValueEvent, useScroll } from 'motion/react';
import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';

import { SectionLayout } from '../_components/SectionLayout.tsx';

import { ExperiencesList } from './ExperiencesList.tsx';

export function ExperienceSection(): ReactElement {
  // Hooks - Elevated States
  const { experienceSectionRef } = useDomRefsContext();
  const { experienceSectionScrollYProgressMotionValue } = useScrollSpyContext();

  // Motion Hooks - Scroll Spy Subscription
  const { scrollYProgress: scrollYProgressMotionValue } = useScroll({
    target: experienceSectionRef,
    offset: ['start end', 'end start'],
    axis: 'y',
  });
  useMotionValueEvent(
    scrollYProgressMotionValue,
    'change',
    (scrollYProgress) => {
      experienceSectionScrollYProgressMotionValue.set(scrollYProgress);
    },
  );

  return (
    <SectionLayout
      sectionRef={experienceSectionRef}
      sectionIconName={IconName.BriefCase}
      sectionTitle={'Experience'}
    >
      <ExperiencesList />
    </SectionLayout>
  );
}
