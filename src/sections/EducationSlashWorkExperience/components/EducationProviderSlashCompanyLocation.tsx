import { type ReactElement, type ReactNode } from 'react';

import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { useEducationSlashWorkExperienceWaterfallOffsetsContext } from '../contexts/useEducationSlashWorkExperienceWaterfallOffsetsContext.tsx';

export function EducationProviderSlashCompanyLocation({
  children,
  educationSlashWorkExperienceIndex,
}: {
  children: ReactNode;
  educationSlashWorkExperienceIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { educationSlashWorkExperienceWaterfallOffsets } =
    useEducationSlashWorkExperienceWaterfallOffsetsContext();

  // Derived States
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.educationProviderSlashCompanyLocation.createMatrix(
      {
        waterfallLength: educationSlashWorkExperienceWaterfallOffsets.at(
          educationSlashWorkExperienceIndex,
        ),
        waterfallCount: 1,
      },
    );

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-education-provider-slash-company-location-text-color)"
    >
      <p className="text-4-5 font-medium">{children}</p>
    </RGBText>
  );
}
