import { type ReactElement } from 'react';

import { useExperiencesDataQuery } from '@/contexts/remote/experience/useExperiencesDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { EducationSlashExperienceDescriptionListItemCountContextProvider } from '@/sections/EducationSlashExperience/contexts/EducationSlashExperienceDescriptionListItemCountContextProvider.tsx';
import { EducationSlashExperienceWaterfallOffsetsContextProvider } from '@/sections/EducationSlashExperience/contexts/EducationSlashExperienceWaterfallOffsetsContextProvider.tsx';
import { ExperienceCategory } from '@/services/experience/constants/ExperienceCategory.ts';

import { ExperienceItem } from './ExperienceItem.tsx';

export function WorkExperiencesList(): ReactElement {
  const { language } = useLanguageContext();
  const workExperiences = useExperiencesDataQuery({
    contentLanguageCode: language,
    associatedExperienceCategories: [
      ExperienceCategory.FrontendDevelopment,
      ExperienceCategory.BackendDevelopment,
      ExperienceCategory.SoftwareDevelopment,
    ],
  });

  return (
    <EducationSlashExperienceDescriptionListItemCountContextProvider
      educationSlashExperienceCount={workExperiences.length}
    >
      <EducationSlashExperienceWaterfallOffsetsContextProvider>
        <ul className="relative z-0 grid gap-y-24">
          {workExperiences.map((workExperience, i) => (
            <ExperienceItem
              key={workExperience.id}
              experience={workExperience}
              experienceIndex={i}
            />
          ))}
        </ul>
      </EducationSlashExperienceWaterfallOffsetsContextProvider>
    </EducationSlashExperienceDescriptionListItemCountContextProvider>
  );
}
