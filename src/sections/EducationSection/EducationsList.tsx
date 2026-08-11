import { type ReactElement } from 'react';

import { useEducationsDataQuery } from '@/contexts/remote/education/useEducationsDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { EducationSlashWorkExperienceWaterfallOffsetsContextProvider } from '@/sections/EducationSlashWorkExperience/contexts/EducationSlashWorkExperienceWaterfallOffsetsContextProvider.tsx';

import { EducationSlashWorkExperienceDescriptionListItemCountContextProvider } from '../EducationSlashWorkExperience/contexts/EducationSlashWorkExperienceDescriptionListItemCountContextProvider.tsx';

import { EducationItem } from './EducationItem.tsx';

export function EducationsList(): ReactElement {
  const { language } = useLanguageContext();
  const educations = useEducationsDataQuery({ contentLanguageCode: language });

  return (
    <EducationSlashWorkExperienceDescriptionListItemCountContextProvider
      educationSlashWorkExperienceCount={educations.length}
    >
      <EducationSlashWorkExperienceWaterfallOffsetsContextProvider>
        <ul className="relative z-0 grid gap-y-20">
          {educations.map((education, i) => (
            <EducationItem
              key={education.id}
              education={education}
              educationIndex={i}
            />
          ))}
        </ul>
      </EducationSlashWorkExperienceWaterfallOffsetsContextProvider>
    </EducationSlashWorkExperienceDescriptionListItemCountContextProvider>
  );
}
