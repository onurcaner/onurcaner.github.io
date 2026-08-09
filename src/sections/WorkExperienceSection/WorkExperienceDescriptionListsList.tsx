import { type ReactElement } from 'react';

import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

import { EducationSlashWorkExperienceDescriptionListsList } from '../EducationSlashWorkExperience/components/EducationSlashWorkExperienceDescriptionListsList.tsx';

export function WorkExperienceDescriptionListsList({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: WorkExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  return (
    <EducationSlashWorkExperienceDescriptionListsList
      descriptionListIds={workExperience.descriptionListIds}
      educationSlashWorkExperienceIndex={workExperienceIndex}
    />
  );
}
