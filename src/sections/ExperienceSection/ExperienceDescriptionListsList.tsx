import { type ReactElement } from 'react';

import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

import { EducationSlashExperienceDescriptionListsList } from '../EducationSlashExperience/components/EducationSlashExperienceDescriptionListsList.tsx';

export function WorkExperienceDescriptionListsList({
  experience,
  experienceIndex,
}: {
  experience: ExperienceClientData;
  experienceIndex: number;
}): ReactElement {
  return (
    <EducationSlashExperienceDescriptionListsList
      descriptionListIds={experience.descriptionListIds}
      educationSlashExperienceIndex={experienceIndex}
    />
  );
}
