import { type ReactElement } from 'react';

import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

import { EducationSlashWorkExperienceLayout } from '../EducationSlashWorkExperience/components/EducationSlashWorkExperienceLayout.tsx';

import { CompanyLocation } from './CompanyLocation.tsx';
import { CompanyName } from './CompanyName.tsx';
import { WorkExperienceDateRange } from './WorkExperienceDateRange.tsx';
import { WorkExperienceDescriptionListsList } from './WorkExperienceDescriptionListsList.tsx';
import { WorkExperienceLevel } from './WorkExperienceLevel.tsx';
import { WorkExperienceTitle } from './WorkExperienceTitle.tsx';

export function WorkExperienceItem({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: WorkExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  return (
    <li>
      <EducationSlashWorkExperienceLayout
        EducationSlashWorkExperienceTitle={
          <WorkExperienceTitle
            workExperience={workExperience}
            workExperienceIndex={workExperienceIndex}
          />
        }

        EducationProviderSlashCompanyName={
          <CompanyName
            workExperience={workExperience}
            workExperienceIndex={workExperienceIndex}
          />
        }

        EducationProviderSlashCompanyLocation={
          <CompanyLocation
            workExperience={workExperience}
            workExperienceIndex={workExperienceIndex}
          />
        }

        EducationSlashWorkExperienceDateRange={
          <WorkExperienceDateRange
            workExperience={workExperience}
            workExperienceIndex={workExperienceIndex}
          />
        }

        EducationGradeSlashWorkExperienceLevel={
          <WorkExperienceLevel
            workExperience={workExperience}
            workExperienceIndex={workExperienceIndex}
          />
        }

        DescriptionListsList={
          workExperience.descriptionListIds.length > 0 ? (
            <WorkExperienceDescriptionListsList
              workExperience={workExperience}
              workExperienceIndex={workExperienceIndex}
            />
          ) : undefined
        }
      />
    </li>
  );
}
