import { useMotionValueEvent, useScroll } from 'motion/react';
import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';

import { SectionLayout } from '../_components/SectionLayout.tsx';

import { EducationsList } from './EducationsList.tsx';

export function EducationSection(): ReactElement {
  // Hooks - Elevated States
  const { educationSectionRef } = useDomRefsContext();
  const { educationSectionScrollYProgressMotionValue } = useScrollSpyContext();

  // Motion Hooks - Scroll Spy Subscription
  const { scrollYProgress: scrollYProgressMotionValue } = useScroll({
    target: educationSectionRef,
    offset: ['start end', 'end start'],
    axis: 'y',
  });
  useMotionValueEvent(
    scrollYProgressMotionValue,
    'change',
    (scrollYProgress) => {
      educationSectionScrollYProgressMotionValue.set(scrollYProgress);
    },
  );

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
