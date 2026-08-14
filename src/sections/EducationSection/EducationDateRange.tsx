import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationSlashExperienceDateRange } from '../EducationSlashExperience/components/EducationSlashExperienceDateRange.tsx';

export function EducationDateRange({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  return (
    <EducationSlashExperienceDateRange
      startDate={education.startDate}
      endDate={education.endDate}
      hasMonth={false}
      educationSlashExperienceIndex={educationIndex}
    />
  );
}
