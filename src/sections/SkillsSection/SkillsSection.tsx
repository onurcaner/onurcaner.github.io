import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { SectionHeading } from '../_components/SectionHeading.tsx';

import { SkillsList } from './SkillsList.tsx';

export function SkillsSection(): ReactElement {
  const { skillsSectionRef } = useDomRefsContext();
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <section
      className="relative z-0 grid min-h-screen content-center items-center py-40"
      ref={skillsSectionRef}
    >
      <div className="justify-self-start">
        <SectionHeading
          iconName={IconName.Box}
          iconRGBLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillsSectionHeadingIcon.createMatrix(
            { waterfallIndex: 0 },
          )}
          textRGBLedIndicesMatrix={rgbLedIndicesMatrixCreators.skillsSectionHeadingText.createMatrix(
            { waterfallIndex: 0 },
          )}
        >
          Skills
        </SectionHeading>
      </div>

      <SkillsList />
    </section>
  );
}
