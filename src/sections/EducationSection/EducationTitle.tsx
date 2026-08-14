import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationSlashExperienceTitle } from '../EducationSlashExperience/components/EducationSlashExperienceTitle.tsx';

export function EducationTitle({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  return (
    <EducationSlashExperienceTitle
      educationSlashExperienceIndex={educationIndex}
    >
      {education.title}
    </EducationSlashExperienceTitle>
  );
}
