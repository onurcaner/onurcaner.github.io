import { type ReactElement, type ReactNode } from 'react';

import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { useEducationSlashExperienceWaterfallOffsetsContext } from '../contexts/useEducationSlashExperienceWaterfallOffsetsContext.tsx';

export function EducationSlashExperienceTitle({
  children,
  educationSlashExperienceIndex,
}: {
  children: ReactNode;
  educationSlashExperienceIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { educationSlashExperienceWaterfallOffsets } =
    useEducationSlashExperienceWaterfallOffsetsContext();

  // Derived States
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.educationSlashExperienceTitle.createMatrix({
      waterfallLength: educationSlashExperienceWaterfallOffsets.at(
        educationSlashExperienceIndex,
      ),
      waterfallCount: 1,
    });

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      preferredNormalFallbackColor="var(--theme-component-education-slash-experience-title-text-color)"
    >
      <h3 className="text-4-5 font-bold">{children}</h3>
    </RGBText>
  );
}
