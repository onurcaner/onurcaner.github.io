import { type ReactElement } from 'react';

import { useCompanyDataQuery } from '@/contexts/remote/company/useCompanyDataQuery.tsx';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

import { EducationProviderSlashCompanyName } from '../EducationSlashWorkExperience/components/EducationProviderSlashCompanyName.tsx';

export function CompanyName({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: WorkExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  const company = useCompanyDataQuery({
    id: workExperience.companyId,
  });

  return (
    <EducationProviderSlashCompanyName
      educationSlashWorkExperienceIndex={workExperienceIndex}
    >
      {company.name}
    </EducationProviderSlashCompanyName>
  );
}
