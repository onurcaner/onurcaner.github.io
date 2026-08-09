import { type ReactElement } from 'react';

import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationSlashWorkExperienceLayout } from '../EducationSlashWorkExperience/components/EducationSlashWorkExperienceLayout.tsx';

import { EducationDateRange } from './EducationDateRange.tsx';
import { EducationDescriptionListsList } from './EducationDescriptionListsList.tsx';
import { EducationGrade } from './EducationGrade.tsx';
import { EducationProviderLocation } from './EducationProviderLocation.tsx';
import { EducationProviderName } from './EducationProviderName.tsx';
import { EducationTitle } from './EducationTitle.tsx';

export function EducationItem({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  return (
    <li>
      <EducationSlashWorkExperienceLayout
        EducationSlashWorkExperienceTitle={
          <EducationTitle
            education={education}
            educationIndex={educationIndex}
          />
        }

        EducationProviderSlashCompanyName={
          <EducationProviderName
            education={education}
            educationIndex={educationIndex}
          />
        }

        EducationProviderSlashCompanyLocation={
          <EducationProviderLocation
            education={education}
            educationIndex={educationIndex}
          />
        }

        EducationSlashWorkExperienceDateRange={
          <EducationDateRange
            education={education}
            educationIndex={educationIndex}
          />
        }

        EducationGradeSlashWorkExperienceLevel={
          <EducationGrade
            education={education}
            educationIndex={educationIndex}
          />
        }

        DescriptionListsList={
          education.descriptionListIds.length > 0 ? (
            <EducationDescriptionListsList
              education={education}
              educationIndex={educationIndex}
            />
          ) : undefined
        }
      />
    </li>
  );
}
