import { type ReactElement } from 'react';

import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

import { EducationSlashExperienceLayout } from '../EducationSlashExperience/components/EducationSlashExperienceLayout.tsx';

import { CompanyLocation } from './CompanyLocation.tsx';
import { CompanyName } from './CompanyName.tsx';
import { WorkExperienceDateRange } from './WorkExperienceDateRange.tsx';
import { WorkExperienceDescriptionListsList } from './WorkExperienceDescriptionListsList.tsx';
import { WorkExperienceLevel } from './WorkExperienceLevel.tsx';
import { WorkExperienceTitle } from './WorkExperienceTitle.tsx';

export function WorkExperienceItem({
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
          <WorkExperienceTitle
            workExperience={experience}
            workExperienceIndex={experienceIndex}
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
          <WorkExperienceDateRange
            experience={experience}
            experienceIndex={experienceIndex}
          />
        }

        EducationGradeSlashExperienceLevel={
          <WorkExperienceLevel
            experience={experience}
            experienceIndex={experienceIndex}
          />
        }

        DescriptionListsList={
          experience.descriptionListIds.length > 0 ? (
            <WorkExperienceDescriptionListsList
              experience={experience}
              experienceIndex={experienceIndex}
            />
          ) : undefined
        }
      />
    </li>
  );
}
