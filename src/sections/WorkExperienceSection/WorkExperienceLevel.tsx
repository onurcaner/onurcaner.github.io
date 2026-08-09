import { type ReactElement } from 'react';

import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

import { EducationGradeSlashWorkExperienceLevel } from '../EducationSlashWorkExperience/components/EducationGradeSlashWorkExperienceLevel.tsx';

export function WorkExperienceLevel({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: WorkExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  return (
    <EducationGradeSlashWorkExperienceLevel
      educationSlashWorkExperienceIndex={workExperienceIndex}
    >
      Not Implemented...{workExperience.contentLanguageCode.slice(0, 0)}
    </EducationGradeSlashWorkExperienceLevel>
  );
}
