import { type ReactElement } from 'react';

import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

import { EducationSlashExperienceTitle } from '../EducationSlashExperience/components/EducationSlashExperienceTitle.tsx';

export function ExperienceTitle({
  experience,
  experienceIndex,
}: {
  experience: ExperienceClientData;
  experienceIndex: number;
}): ReactElement {
  return (
    <EducationSlashExperienceTitle
      educationSlashExperienceIndex={experienceIndex}
    >
      {experience.title}
    </EducationSlashExperienceTitle>
  );
}
