import { type ReactElement, type ReactNode } from 'react';

import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { useEducationSlashExperienceWaterfallOffsetsContext } from '../contexts/useEducationSlashExperienceWaterfallOffsetsContext.tsx';

export function EducationSlashWorkExperienceTitle({
  children,
  educationSlashWorkExperienceIndex,
}: {
  children: ReactNode;
  educationSlashWorkExperienceIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { educationSlashExperienceWaterfallOffsets } =
    useEducationSlashExperienceWaterfallOffsetsContext();

  // Derived States
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.educationSlashExperienceTitle.createMatrix({
      waterfallLength: educationSlashExperienceWaterfallOffsets.at(
        educationSlashWorkExperienceIndex,
      ),
      waterfallCount: 1,
    });

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-education-slash-work-experience-title-text-color)"
    >
      <h3 className="text-4-5 font-bold">{children}</h3>
    </RGBText>
  );
}
