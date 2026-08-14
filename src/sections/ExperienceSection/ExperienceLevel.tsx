import { type ReactElement } from 'react';

import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

import { EducationGradeSlashExperienceLevel } from '../EducationSlashExperience/components/EducationGradeSlashExperienceLevel.tsx';

export function ExperienceLevel({
  experience,
  experienceIndex,
}: {
  experience: ExperienceClientData;
  experienceIndex: number;
}): ReactElement {
  return (
    <EducationGradeSlashExperienceLevel
      educationSlashExperienceIndex={experienceIndex}
    >
      Level: {experience.level}
    </EducationGradeSlashExperienceLevel>
  );
}
