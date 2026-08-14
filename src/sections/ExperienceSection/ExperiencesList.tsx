import { type ReactElement } from 'react';

import { useExperiencesDataQuery } from '@/contexts/remote/experience/useExperiencesDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { ExperienceCategory } from '@/services/experience/constants/ExperienceCategory.ts';

import { EducationSlashExperienceDescriptionListItemCountContextProvider } from '../EducationSlashExperience/contexts/EducationSlashExperienceDescriptionListItemCountContextProvider.tsx';
import { EducationSlashExperienceWaterfallOffsetsContextProvider } from '../EducationSlashExperience/contexts/EducationSlashExperienceWaterfallOffsetsContextProvider.tsx';

import { ExperienceItem } from './ExperienceItem.tsx';

export function ExperiencesList(): ReactElement {
  const { language } = useLanguageContext();
  const experiences = useExperiencesDataQuery({
    contentLanguageCode: language,
    associatedExperienceCategories: [
      ExperienceCategory.FrontendDevelopment,
      ExperienceCategory.BackendDevelopment,
      ExperienceCategory.SoftwareDevelopment,
    ],
  });

  return (
    <EducationSlashExperienceDescriptionListItemCountContextProvider
      educationSlashExperienceCount={experiences.length}
    >
      <EducationSlashExperienceWaterfallOffsetsContextProvider>
        <ul className="relative z-0 grid gap-y-24">
          {experiences.map((experience, i) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              experienceIndex={i}
            />
          ))}
        </ul>
      </EducationSlashExperienceWaterfallOffsetsContextProvider>
    </EducationSlashExperienceDescriptionListItemCountContextProvider>
  );
}
