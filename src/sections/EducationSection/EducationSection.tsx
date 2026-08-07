import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { useDomRefsContext } from '@/contexts/global/dom-refs/contexts/useDomRefsContext.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { SectionHeading } from '../_components/SectionHeading.tsx';

import { EducationsList } from './EducationsList.tsx';

export function EducationSection(): ReactElement {
  const { educationSectionRef } = useDomRefsContext();
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <section
      className="relative z-0 grid min-h-screen content-center items-center py-40"
      ref={educationSectionRef}
    >
      <div className="justify-self-start">
        <SectionHeading
          iconName={IconName.GraduationCap}
          iconRGBLedIndicesMatrix={rgbLedIndicesMatrixCreators.educationSectionHeadingIcon.createMatrix(
            { waterfallIndex: 0 },
          )}
          textRGBLedIndicesMatrix={rgbLedIndicesMatrixCreators.educationSectionHeadingText.createMatrix(
            { waterfallIndex: 0 },
          )}
        >
          Education
        </SectionHeading>
      </div>

      <EducationsList />
    </section>
  );
}
