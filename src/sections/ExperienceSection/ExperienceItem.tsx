import { type ReactElement } from 'react';

import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

import { EducationSlashExperienceLayout } from '../EducationSlashExperience/components/EducationSlashExperienceLayout.tsx';

import { CompanyLocation } from './CompanyLocation.tsx';
import { CompanyName } from './CompanyName.tsx';
import { ExperienceDateRange } from './ExperienceDateRange.tsx';
import { ExperienceDescriptionListsList } from './ExperienceDescriptionListsList.tsx';
import { ExperienceLevel } from './ExperienceLevel.tsx';
import { ExperienceTitle } from './ExperienceTitle.tsx';

export function ExperienceItem({
  experience,
  experienceIndex,
}: {
  experience: ExperienceClientData;
  experienceIndex: number;
}): ReactElement {
  return (
    <li>
      <EducationSlashExperienceLayout
        EducationSlashExperienceTitle={
          <ExperienceTitle
            experience={experience}
            experienceIndex={experienceIndex}
          />
        }

        EducationProviderSlashCompanyName={
          <CompanyName
            experience={experience}
            experienceIndex={experienceIndex}
          />
        }

        EducationProviderSlashCompanyLocation={
          <CompanyLocation
            experience={experience}
            experienceIndex={experienceIndex}
          />
        }

        EducationSlashExperienceDateRange={
          <ExperienceDateRange
            experience={experience}
            experienceIndex={experienceIndex}
          />
        }

        EducationGradeSlashExperienceLevel={
          <ExperienceLevel
            experience={experience}
            experienceIndex={experienceIndex}
          />
        }

        DescriptionListsList={
          experience.descriptionListIds.length > 0 ? (
            <ExperienceDescriptionListsList
              experience={experience}
              experienceIndex={experienceIndex}
            />
          ) : undefined
        }
      />
    </li>
  );
}
