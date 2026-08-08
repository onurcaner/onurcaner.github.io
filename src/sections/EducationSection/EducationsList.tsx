import { type ReactElement } from 'react';

import { useEducationsDataQuery } from '@/contexts/remote/education/useEducationsDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { EducationItem } from '@/sections/EducationSection/EducationItem.tsx';

export function EducationsList(): ReactElement {
  const { language } = useLanguageContext();
  const educations = useEducationsDataQuery({ contentLanguageCode: language });

  return (
    <ul className="relative z-0 grid gap-y-12">
      {educations.map((education) => (
        <EducationItem key={education.id} education={education} />
      ))}
    </ul>
  );
}
