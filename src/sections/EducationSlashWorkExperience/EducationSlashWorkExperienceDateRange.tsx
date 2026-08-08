import { type ReactElement } from 'react';

import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';

export function EducationSlashWorkExperienceDateRange({
  startDate,
  endDate,
  hasMonth,
}: {
  startDate: Date;
  endDate: Date;
  hasMonth: boolean;
}): ReactElement {
  const { language } = useLanguageContext();

  const isEnded = new Date().getTime() > endDate.getTime();
  const dateTimeFormat = new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: hasMonth ? '2-digit' : undefined,
  });

  return (
    <p className="text-4-5 font-semibold text-(--theme-component-education-and-work-experience-date-range-text-color)">
      {dateTimeFormat.format(startDate)} -{' '}
      {isEnded ? dateTimeFormat.format(endDate) : 'Current'}
    </p>
  );
}
