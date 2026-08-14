import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  useVelocity,
} from 'motion/react';
import { type ReactElement, type ReactNode } from 'react';

import { SectionName } from '@/constants/SectionName.ts';

import { ScrollYDirection } from '../_constants/ScrollYDirection.ts';
import { ScrollSpyContext } from '../contexts/ScrollSpyContext.tsx';

export function ScrollSpyContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  // Hooks - Local States
  const {
    scrollY: pageScrollYMotionValue,
    scrollYProgress: pageScrollYProgressMotionValue,
  } = useScroll({ axis: 'y' });
  const pageScrollYDirectionMotionValue = useMotionValue(ScrollYDirection.Up);
  const heroSectionScrollYProgressMotionValue = useMotionValue(0);
  const skillsSectionScrollYProgressMotionValue = useMotionValue(0);
  const educationSectionScrollYProgressMotionValue = useMotionValue(0);
  const experienceSectionScrollYProgressMotionValue = useMotionValue(0);
  const callToActionSectionScrollYProgressMotionValue = useMotionValue(0);

  // Hooks - Derived States
  const pageScrollYVelocityMotionValue = useVelocity(pageScrollYMotionValue);
  useMotionValueEvent(pageScrollYVelocityMotionValue, 'change', (velocity) => {
    if (velocity > 0) {
      pageScrollYDirectionMotionValue.set(ScrollYDirection.Down);
    }
    if (velocity < 0) {
      pageScrollYDirectionMotionValue.set(ScrollYDirection.Up);
    }
  });

  const activeSectionNameMotionValue = useTransform(
    [
      heroSectionScrollYProgressMotionValue,
      skillsSectionScrollYProgressMotionValue,
      educationSectionScrollYProgressMotionValue,
      experienceSectionScrollYProgressMotionValue,
      callToActionSectionScrollYProgressMotionValue,
    ],
    (scrollYProgresses: number[]): SectionName | null => {
      const normalisedScrollYProgresses = scrollYProgresses.map(
        (scrollYProgress) => Math.min(scrollYProgress, 0.5),
      );
      const sectionNames = [
        SectionName.Hero,
        SectionName.Skills,
        SectionName.Education,
        SectionName.Experience,
        SectionName.CallToAction,
      ];

      const passedSectionCount = normalisedScrollYProgresses.filter(
        (scrollYProgress) => scrollYProgress >= 0.25,
      ).length;
      if (passedSectionCount === 0) return null;

      const activeIndex = (passedSectionCount - 1) % sectionNames.length;
      return sectionNames.at(activeIndex) ?? null;
    },
  );

  return (
    <ScrollSpyContext
      value={{
        pageScrollYMotionValue: pageScrollYMotionValue,
        pageScrollYProgressMotionValue: pageScrollYProgressMotionValue,
        pageScrollYDirectionMotionValue: pageScrollYDirectionMotionValue,

        heroSectionScrollYProgressMotionValue:
          heroSectionScrollYProgressMotionValue,
        skillsSectionScrollYProgressMotionValue:
          skillsSectionScrollYProgressMotionValue,
        educationSectionScrollYProgressMotionValue:
          educationSectionScrollYProgressMotionValue,
        experienceSectionScrollYProgressMotionValue:
          experienceSectionScrollYProgressMotionValue,
        callToActionSectionScrollYProgressMotionValue:
          callToActionSectionScrollYProgressMotionValue,

        activeSectionNameMotionValue: activeSectionNameMotionValue,
      }}
    >
      {children}
    </ScrollSpyContext>
  );
}
