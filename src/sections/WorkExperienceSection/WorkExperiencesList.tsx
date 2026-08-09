import { type ReactElement } from 'react';

import { useWorkExperiencesDataQuery } from '@/contexts/remote/work-experince/useWorkExperiencesDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { EducationSlashWorkExperienceWaterfallContextProvider } from '@/sections/EducationSlashWorkExperience/contexts/EducationSlashWorkExperienceWaterfallContextProvider.tsx';
import { WorkExperienceCategory } from '@/services/work-experience/constants/WorkExperienceCategory.ts';

import { EducationSlashWorkExperienceDescriptionListItemCountContextProvider } from '../EducationSlashWorkExperience/contexts/EducationSlashWorkExperienceDescriptionListItemCountContextProvider.tsx';

import { WorkExperienceItem } from './WorkExperienceItem.tsx';

export function WorkExperiencesList(): ReactElement {
  const { language } = useLanguageContext();
  const workExperiences = useWorkExperiencesDataQuery({
    contentLanguageCode: language,
    associatedWorkExperienceCategories: [
      WorkExperienceCategory.FrontendDevelopment,
      WorkExperienceCategory.BackendDevelopment,
      WorkExperienceCategory.SoftwareDevelopment,
    ],
  });

  return (
    <EducationSlashWorkExperienceDescriptionListItemCountContextProvider
      educationSlashWorkExperienceCount={workExperiences.length}
    >
      <EducationSlashWorkExperienceWaterfallContextProvider
        educationSlashWorkExperienceCount={workExperiences.length}
      >
        <ul className="relative z-0 grid gap-y-24">
          {workExperiences.map((workExperience, i) => (
            <WorkExperienceItem
              key={workExperience.id}
              workExperience={workExperience}
              workExperienceIndex={i}
            />
          ))}
        </ul>
      </EducationSlashWorkExperienceWaterfallContextProvider>
    </EducationSlashWorkExperienceDescriptionListItemCountContextProvider>
  );
}
