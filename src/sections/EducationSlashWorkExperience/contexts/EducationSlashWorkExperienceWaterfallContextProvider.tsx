import { type ReactElement, type ReactNode } from 'react';

import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { EducationSlashWorkExperienceWaterfallContext } from '@/sections/EducationSlashWorkExperience/contexts/EducationSlashWorkExperienceWaterfallContext.tsx';

import { useEducationSlashWorkExperienceDescriptionListItemCountContext } from './useEducationSlashWorkExperienceDescriptionListItemCountContext.tsx';

export function EducationSlashWorkExperienceWaterfallContextProvider({
  children,
  educationSlashWorkExperienceCount,
}: {
  children: ReactNode;
  educationSlashWorkExperienceCount: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { itemCountMatrix } =
    useEducationSlashWorkExperienceDescriptionListItemCountContext();

  // Derived States
  const offsets: number[] = Array.from({
    length: educationSlashWorkExperienceCount,
  }).map((_, educationSlashWorkExperienceIndex) => {
    if (educationSlashWorkExperienceIndex === 0) return 0;

    const mainLengths = [
      educationSlashWorkExperienceIndex *
        rgbLedIndicesMatrixCreators.educationSlashWorkExperienceTitle
          .waterfallLength,
      educationSlashWorkExperienceIndex *
        rgbLedIndicesMatrixCreators.educationSlashWorkExperienceDateRange
          .waterfallLength,
      educationSlashWorkExperienceIndex *
        rgbLedIndicesMatrixCreators.educationProviderSlashCompanyName
          .waterfallLength,
      educationSlashWorkExperienceIndex *
        rgbLedIndicesMatrixCreators.educationProviderSlashCompanyLocation
          .waterfallLength,
      educationSlashWorkExperienceIndex *
        rgbLedIndicesMatrixCreators.educationGradeSlashWorkExperienceLevel
          .waterfallLength,
    ];

    const listRelatedLengths = Array.from({
      length: educationSlashWorkExperienceIndex,
    })
      .map((_, i) => i)
      .map((educationSlashWorkExperienceIndex) => {
        const rowItems = itemCountMatrix[educationSlashWorkExperienceIndex];
        const fromTitles =
          rowItems.length *
          rgbLedIndicesMatrixCreators
            .educationSlashWorkExperienceDescriptionListTitle.waterfallLength;
        const fromItemIcons = rowItems.reduce(
          (sum, current) =>
            sum +
            current *
              rgbLedIndicesMatrixCreators
                .educationSlashWorkExperienceDescriptionListItemIcon
                .waterfallLength,
          0,
        );
        const fromItemTexts = rowItems.reduce(
          (sum, current) =>
            sum +
            current *
              rgbLedIndicesMatrixCreators
                .educationSlashWorkExperienceDescriptionListItemText
                .waterfallLength,
          0,
        );

        return fromTitles + fromItemIcons + fromItemTexts;
      });

    const allLengths = [...mainLengths, ...listRelatedLengths];

    return allLengths.reduce((sum, current) => sum + current, 0);
  });

  return (
    <EducationSlashWorkExperienceWaterfallContext
      value={{
        educationSlashWorkExperienceTitleWaterfallLength: offsets,
        educationSlashWorkExperienceDateRangeWaterfallLength: offsets,
        educationProviderSlashCompanyNameWaterfallLength: offsets,
        educationProviderSlashCompanyLocationWaterfallLength: offsets,
        educationGradeSlashWorkExperienceLevelWaterfallLength: offsets,
      }}
    >
      {children}
    </EducationSlashWorkExperienceWaterfallContext>
  );
}
