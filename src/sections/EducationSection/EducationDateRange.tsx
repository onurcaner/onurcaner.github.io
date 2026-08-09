import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationSlashWorkExperienceDateRange } from '../EducationSlashWorkExperience/components/EducationSlashWorkExperienceDateRange.tsx';

export function EducationDateRange({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  return (
    <EducationSlashWorkExperienceDateRange
      startDate={education.startDate}
      endDate={education.endDate}
      hasMonth={false}
      educationSlashWorkExperienceIndex={educationIndex}
    />
  );
}
