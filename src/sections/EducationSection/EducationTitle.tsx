import { type ReactElement } from 'react';

import { EducationSlashWorkExperienceTitle } from '@/sections/EducationSlashWorkExperience/EducationSlashWorkExperienceTitle.tsx';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

export function EducationTitle({
  education,
}: {
  education: EducationClientData;
}): ReactElement {
  return (
    <EducationSlashWorkExperienceTitle>
      {education.title}
    </EducationSlashWorkExperienceTitle>
  );
}
