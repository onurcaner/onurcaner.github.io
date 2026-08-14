import { type ReactElement, type ReactNode } from 'react';

import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { EducationSlashExperienceWaterfallOffsetsContext } from '@/sections/EducationSlashExperience/contexts/EducationSlashExperienceWaterfallOffsetsContext.tsx';

import { useEducationSlashExperienceDescriptionListItemCountContext } from './useEducationSlashExperienceDescriptionListItemCountContext.tsx';

export function EducationSlashExperienceWaterfallOffsetsContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { itemCountMatrix } =
    useEducationSlashExperienceDescriptionListItemCountContext();

  // Derived States
  const educationSlashExperienceWaterfallOffsets: number[] =
    itemCountMatrix.map((_, educationSlashExperienceIndex) => {
      const mainLengths = [
        educationSlashExperienceIndex *
          rgbLedIndicesMatrixCreators.educationSlashExperienceTitle.selfLength,
        educationSlashExperienceIndex *
          rgbLedIndicesMatrixCreators.educationSlashExperienceDateRange
            .selfLength,
        educationSlashExperienceIndex *
          rgbLedIndicesMatrixCreators.educationProviderSlashCompanyName
            .selfLength,
        educationSlashExperienceIndex *
          rgbLedIndicesMatrixCreators.educationProviderSlashCompanyLocation
            .selfLength,
        educationSlashExperienceIndex *
          rgbLedIndicesMatrixCreators.educationGradeSlashExperienceLevel
            .selfLength,
      ];

      const listRelatedLengths = itemCountMatrix
        .slice(0, educationSlashExperienceIndex)
        .map((itemCounts) => {
          const fromTitles =
            itemCounts.length *
            rgbLedIndicesMatrixCreators
              .educationSlashExperienceDescriptionListTitle.selfLength;
          const fromItemIcons = itemCounts.reduce(
            (sum, current) =>
              sum +
              current *
                rgbLedIndicesMatrixCreators
                  .educationSlashExperienceDescriptionListItemIcon.selfLength,
            0,
          );
          const fromItemTexts = itemCounts.reduce(
            (sum, current) =>
              sum +
              current *
                rgbLedIndicesMatrixCreators
                  .educationSlashExperienceDescriptionListItemText.selfLength,
            0,
          );

          return fromTitles + fromItemIcons + fromItemTexts;
        });

      const allLengths = [...mainLengths, ...listRelatedLengths];

      return allLengths.reduce((sum, current) => sum + current, 0);
    });

  const educationSlashExperienceDescriptionListWaterfallOffsets: number[][] =
    itemCountMatrix.map((itemCounts): number[] => {
      return itemCounts.map((_, descriptionListIndex, itemCounts): number => {
        const fromTitles =
          descriptionListIndex *
          rgbLedIndicesMatrixCreators
            .educationSlashExperienceDescriptionListTitle.selfLength;
        const fromItemIcons = itemCounts
          .slice(0, descriptionListIndex)
          .reduce(
            (sum, current) =>
              sum +
              current *
                rgbLedIndicesMatrixCreators
                  .educationSlashExperienceDescriptionListItemIcon.selfLength,
            0,
          );
        const fromItemTexts = itemCounts
          .slice(0, descriptionListIndex)
          .reduce(
            (sum, current) =>
              sum +
              current *
                rgbLedIndicesMatrixCreators
                  .educationSlashExperienceDescriptionListItemText.selfLength,
            0,
          );

        return fromTitles + fromItemIcons + fromItemTexts;
      });
    });

  return (
    <EducationSlashExperienceWaterfallOffsetsContext
      value={{
        educationSlashExperienceWaterfallOffsets:
          educationSlashExperienceWaterfallOffsets,
        educationSlashExperienceDescriptionListWaterfallOffsets:
          educationSlashExperienceDescriptionListWaterfallOffsets,
      }}
    >
      {children}
    </EducationSlashExperienceWaterfallOffsetsContext>
  );
}
