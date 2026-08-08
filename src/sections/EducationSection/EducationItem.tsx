import { type ReactElement } from 'react';

import { EducationSlashWorkExperienceDescriptionListsList } from '@/sections/EducationSlashWorkExperience/EducationSlashWorkExperienceDescriptionListsList.tsx';
import { EducationSlashWorkExperienceLayout } from '@/sections/EducationSlashWorkExperience/EducationSlashWorkExperienceLayout.tsx';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationDateRange } from './EducationDateRange.tsx';
import { EducationGrade } from './EducationGrade.tsx';
import { EducationProviderLocation } from './EducationProviderLocation.tsx';
import { EducationProviderName } from './EducationProviderName.tsx';
import { EducationTitle } from './EducationTitle.tsx';

export function EducationItem({
  education,
}: {
  education: EducationClientData;
}): ReactElement {
  return (
    <li>
      <EducationSlashWorkExperienceLayout
        EducationSlashWorkExperienceTitle={
          <EducationTitle education={education} />
        }
        EducationProviderSlashCompanyName={
          <EducationProviderName education={education} />
        }
        EducationProviderSlashCompanyLocation={
          <EducationProviderLocation education={education} />
        }
        EducationSlashWorkExperienceDateRange={
          <EducationDateRange education={education} />
        }
        EducationGrade={<EducationGrade education={education} />}
        DescriptionListsList={
          education.descriptionListIds.length > 0 ? (
            <EducationSlashWorkExperienceDescriptionListsList
              listIds={education.descriptionListIds}
            />
          ) : undefined
        }
      />
    </li>
  );
}
