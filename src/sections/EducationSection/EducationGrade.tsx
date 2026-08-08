import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

export function EducationGrade({
  education,
}: {
  education: EducationClientData;
}): ReactElement {
  return (
    <p className="text-4-5 font-extralight text-(--theme-component-education-grade-text-color)">
      {education.gradeType}: {education.gradeValue}
    </p>
  );
}
