import { type ReactElement } from 'react';

import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { useEducationSlashWorkExperienceWaterfallOffsetsContext } from '../contexts/useEducationSlashWorkExperienceWaterfallOffsetsContext.tsx';

export function EducationSlashWorkExperienceDateRange({
  startDate,
  endDate,
  hasMonth,
  educationSlashWorkExperienceIndex,
}: {
  startDate: Date;
  endDate: Date;
  hasMonth: boolean;
  educationSlashWorkExperienceIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { language } = useLanguageContext();
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { educationSlashWorkExperienceWaterfallOffsets } =
    useEducationSlashWorkExperienceWaterfallOffsetsContext();

  // Derived States
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.educationSlashWorkExperienceDateRange.createMatrix(
      {
        waterfallLength: educationSlashWorkExperienceWaterfallOffsets.at(
          educationSlashWorkExperienceIndex,
        ),
        waterfallCount: 1,
      },
    );

  const isEnded = new Date().getTime() > endDate.getTime();
  const dateTimeFormat = new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: hasMonth ? '2-digit' : undefined,
  });

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-education-slash-work-experience-date-range-text-color)"
    >
      <p className="text-4-5 font-bold">
        {dateTimeFormat.format(startDate)} -{' '}
        {isEnded ? dateTimeFormat.format(endDate) : 'Current'}
      </p>
    </RGBText>
  );
}
