import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationGradeSlashExperienceLevel } from '../EducationSlashExperience/components/EducationGradeSlashExperienceLevel.tsx';

export function EducationGrade({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  return (
    <EducationGradeSlashExperienceLevel
      educationSlashExperienceIndex={educationIndex}
    >
      {education.gradeType}: {education.gradeValue}
    </EducationGradeSlashExperienceLevel>
  );
}
