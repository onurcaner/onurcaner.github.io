import { type ReactElement, type ReactNode } from 'react';

import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { useEducationSlashWorkExperienceWaterfallOffsetsContext } from '../contexts/useEducationSlashWorkExperienceWaterfallOffsetsContext.tsx';

export function EducationProviderSlashCompanyName({
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
    rgbLedIndicesMatrixCreators.educationProviderSlashCompanyName.createMatrix({
      waterfallLength: educationSlashWorkExperienceWaterfallOffsets.at(
        educationSlashWorkExperienceIndex,
      ),
      waterfallCount: 1,
    });

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-education-provider-slash-company-name-text-color)"
    >
      <h4 className="text-4-5 font-medium">{children}</h4>
    </RGBText>
  );
}
