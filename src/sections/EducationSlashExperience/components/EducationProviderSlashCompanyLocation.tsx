import { type ReactElement, type ReactNode } from 'react';

import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { useEducationSlashExperienceWaterfallOffsetsContext } from '../contexts/useEducationSlashExperienceWaterfallOffsetsContext.tsx';

export function EducationProviderSlashCompanyLocation({
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
    rgbLedIndicesMatrixCreators.educationProviderSlashCompanyLocation.createMatrix(
      {
        waterfallLength: educationSlashExperienceWaterfallOffsets.at(
          educationSlashExperienceIndex,
        ),
        waterfallCount: 1,
      },
    );

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-education-provider-slash-company-location-text-color)"
    >
      <p className="text-4-5 font-medium">{children}</p>
    </RGBText>
  );
}
