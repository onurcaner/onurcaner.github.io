import { type ReactElement } from 'react';

import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

import { EducationSlashWorkExperienceTitle } from '../EducationSlashWorkExperience/components/EducationSlashWorkExperienceTitle.tsx';

export function WorkExperienceTitle({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: WorkExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  return (
    <EducationSlashWorkExperienceTitle
      educationSlashWorkExperienceIndex={workExperienceIndex}
    >
      {workExperience.title}
    </EducationSlashWorkExperienceTitle>
  );
}
