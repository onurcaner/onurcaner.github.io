import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationSlashWorkExperienceTitle } from '../EducationSlashWorkExperience/components/EducationSlashWorkExperienceTitle.tsx';

export function EducationTitle({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  return (
    <EducationSlashWorkExperienceTitle
      educationSlashWorkExperienceIndex={educationIndex}
    >
      {education.title}
    </EducationSlashWorkExperienceTitle>
  );
}
