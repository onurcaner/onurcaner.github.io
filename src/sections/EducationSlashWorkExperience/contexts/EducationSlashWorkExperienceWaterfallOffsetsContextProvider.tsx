import { type ReactElement, type ReactNode } from 'react';

import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { EducationSlashWorkExperienceWaterfallOffsetsContext } from '@/sections/EducationSlashWorkExperience/contexts/EducationSlashWorkExperienceWaterfallOffsetsContext.tsx';

import { useEducationSlashWorkExperienceDescriptionListItemCountContext } from './useEducationSlashWorkExperienceDescriptionListItemCountContext.tsx';

export function EducationSlashWorkExperienceWaterfallOffsetsContextProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { itemCountMatrix } =
    useEducationSlashWorkExperienceDescriptionListItemCountContext();

  // Derived States
  const educationSlashWorkExperienceWaterfallOffsets: number[] =
    itemCountMatrix.map((_, educationSlashWorkExperienceIndex) => {
      const mainLengths = [
        educationSlashWorkExperienceIndex *
          rgbLedIndicesMatrixCreators.educationSlashWorkExperienceTitle
            .selfLength,
        educationSlashWorkExperienceIndex *
          rgbLedIndicesMatrixCreators.educationSlashWorkExperienceDateRange
            .selfLength,
        educationSlashWorkExperienceIndex *
          rgbLedIndicesMatrixCreators.educationProviderSlashCompanyName
            .selfLength,
        educationSlashWorkExperienceIndex *
          rgbLedIndicesMatrixCreators.educationProviderSlashCompanyLocation
            .selfLength,
        educationSlashWorkExperienceIndex *
          rgbLedIndicesMatrixCreators.educationGradeSlashWorkExperienceLevel
            .selfLength,
      ];

      const listRelatedLengths = itemCountMatrix
        .slice(0, educationSlashWorkExperienceIndex)
        .map((itemCounts) => {
          const fromTitles =
            itemCounts.length *
            rgbLedIndicesMatrixCreators
              .educationSlashWorkExperienceDescriptionListTitle.selfLength;
          const fromItemIcons = itemCounts.reduce(
            (sum, current) =>
              sum +
              current *
                rgbLedIndicesMatrixCreators
                  .educationSlashWorkExperienceDescriptionListItemIcon
                  .selfLength,
            0,
          );
          const fromItemTexts = itemCounts.reduce(
            (sum, current) =>
              sum +
              current *
                rgbLedIndicesMatrixCreators
                  .educationSlashWorkExperienceDescriptionListItemText
                  .selfLength,
            0,
          );

          return fromTitles + fromItemIcons + fromItemTexts;
        });

      const allLengths = [...mainLengths, ...listRelatedLengths];

      return allLengths.reduce((sum, current) => sum + current, 0);
    });

  const educationSlashWorkExperienceDescriptionListWaterfallOffsets: number[][] =
    itemCountMatrix.map((itemCounts): number[] => {
      return itemCounts.map((_, descriptionListIndex, itemCounts): number => {
        const fromTitles =
          descriptionListIndex *
          rgbLedIndicesMatrixCreators
            .educationSlashWorkExperienceDescriptionListTitle.selfLength;
        const fromItemIcons = itemCounts
          .slice(0, descriptionListIndex)
          .reduce(
            (sum, current) =>
              sum +
              current *
                rgbLedIndicesMatrixCreators
                  .educationSlashWorkExperienceDescriptionListItemIcon
                  .selfLength,
            0,
          );
        const fromItemTexts = itemCounts
          .slice(0, descriptionListIndex)
          .reduce(
            (sum, current) =>
              sum +
              current *
                rgbLedIndicesMatrixCreators
                  .educationSlashWorkExperienceDescriptionListItemText
                  .selfLength,
            0,
          );

        return fromTitles + fromItemIcons + fromItemTexts;
      });
    });

  return (
    <EducationSlashWorkExperienceWaterfallOffsetsContext
      value={{
        educationSlashWorkExperienceWaterfallOffsets:
          educationSlashWorkExperienceWaterfallOffsets,
        educationSlashWorkExperienceDescriptionListWaterfallOffsets:
          educationSlashWorkExperienceDescriptionListWaterfallOffsets,
      }}
    >
      {children}
    </EducationSlashWorkExperienceWaterfallOffsetsContext>
  );
}
