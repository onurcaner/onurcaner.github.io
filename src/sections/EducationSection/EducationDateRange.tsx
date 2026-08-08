import { type ReactElement } from 'react';

import { EducationSlashWorkExperienceDateRange } from '@/sections/EducationSlashWorkExperience/EducationSlashWorkExperienceDateRange.tsx';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

export function EducationDateRange({
  education,
}: {
  education: EducationClientData;
}): ReactElement {
  return (
    <EducationSlashWorkExperienceDateRange
      startDate={education.startDate}
      endDate={education.endDate}
      hasMonth={false}
    />
  );
}
