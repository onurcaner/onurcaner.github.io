import { type ReactElement } from 'react';

import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

import { EducationSlashExperienceDateRange } from '../EducationSlashExperience/components/EducationSlashExperienceDateRange.tsx';

export function WorkExperienceDateRange({
  experience,
  experienceIndex,
}: {
  experience: ExperienceClientData;
  experienceIndex: number;
}): ReactElement {
  return (
    <EducationSlashExperienceDateRange
      startDate={experience.startDate}
      endDate={experience.endDate}
      hasMonth={true}
      educationSlashExperienceIndex={experienceIndex}
    />
  );
}
