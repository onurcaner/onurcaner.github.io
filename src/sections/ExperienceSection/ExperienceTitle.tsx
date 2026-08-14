import { type ReactElement } from 'react';

import { EducationSlashExperienceTitle } from '@/sections/EducationSlashExperience/components/EducationSlashExperienceTitle.tsx';
import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

export function WorkExperienceTitle({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: ExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  return (
    <EducationSlashExperienceTitle
      educationSlashExperienceIndex={workExperienceIndex}
    >
      {workExperience.title}
    </EducationSlashExperienceTitle>
  );
}
