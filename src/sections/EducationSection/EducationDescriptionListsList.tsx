import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationSlashExperienceDescriptionListsList } from '../EducationSlashExperience/components/EducationSlashExperienceDescriptionListsList.tsx';

export function EducationDescriptionListsList({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  return (
    <EducationSlashExperienceDescriptionListsList
      descriptionListIds={education.descriptionListIds}
      educationSlashExperienceIndex={educationIndex}
    />
  );
}
