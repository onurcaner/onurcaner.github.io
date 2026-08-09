import { type ReactElement } from 'react';

import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

import { EducationSlashWorkExperienceDateRange } from '../EducationSlashWorkExperience/components/EducationSlashWorkExperienceDateRange.tsx';

export function WorkExperienceDateRange({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: WorkExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  return (
    <EducationSlashWorkExperienceDateRange
      startDate={workExperience.startDate}
      endDate={workExperience.endDate}
      hasMonth={true}
      educationSlashWorkExperienceIndex={workExperienceIndex}
    />
  );
}
