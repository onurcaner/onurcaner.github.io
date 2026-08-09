import { type ReactElement, type ReactNode } from 'react';

import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function EducationGradeSlashWorkExperienceLevel({
  children,
  educationSlashWorkExperienceIndex,
}: {
  children: ReactNode;
  educationSlashWorkExperienceIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  // Derived States
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.educationGradeSlashWorkExperienceLevel.createMatrix(
      {
        waterfallIndex: educationSlashWorkExperienceIndex,
      },
    );

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-education-grade-slash-work-experience-level-text-color)"
    >
      <p className="text-4-5 font-extralight">{children}</p>
    </RGBText>
  );
}
