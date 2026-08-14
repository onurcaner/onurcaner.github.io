import { type ReactElement } from 'react';

import { useEducationsDataQuery } from '@/contexts/remote/education/useEducationsDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';

import { EducationSlashExperienceDescriptionListItemCountContextProvider } from '../EducationSlashExperience/contexts/EducationSlashExperienceDescriptionListItemCountContextProvider.tsx';
import { EducationSlashExperienceWaterfallOffsetsContextProvider } from '../EducationSlashExperience/contexts/EducationSlashExperienceWaterfallOffsetsContextProvider.tsx';

import { EducationItem } from './EducationItem.tsx';

export function EducationsList(): ReactElement {
  const { language } = useLanguageContext();
  const educations = useEducationsDataQuery({ contentLanguageCode: language });

  return (
    <EducationSlashExperienceDescriptionListItemCountContextProvider
      educationSlashExperienceCount={educations.length}
    >
      <EducationSlashExperienceWaterfallOffsetsContextProvider>
        <ul className="relative z-0 grid gap-y-20">
          {educations.map((education, i) => (
            <EducationItem
              key={education.id}
              education={education}
              educationIndex={i}
            />
          ))}
        </ul>
      </EducationSlashExperienceWaterfallOffsetsContextProvider>
    </EducationSlashExperienceDescriptionListItemCountContextProvider>
  );
}
