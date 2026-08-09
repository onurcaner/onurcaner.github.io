import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationSlashWorkExperienceDescriptionListsList } from '../EducationSlashWorkExperience/components/EducationSlashWorkExperienceDescriptionListsList.tsx';

export function EducationDescriptionListsList({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  return (
    <EducationSlashWorkExperienceDescriptionListsList
      descriptionListIds={education.descriptionListIds}
      educationSlashWorkExperienceIndex={educationIndex}
    />
  );
}
