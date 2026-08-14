import { type ReactElement } from 'react';

import { useCompanyDataQuery } from '@/contexts/remote/company/useCompanyDataQuery.tsx';
import { EducationProviderSlashCompanyName } from '@/sections/EducationSlashExperience/components/EducationProviderSlashCompanyName.tsx';
import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

export function CompanyName({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: ExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  const company = useCompanyDataQuery({
    id: workExperience.companyId,
  });

  return (
    <EducationProviderSlashCompanyName
      educationSlashExperienceIndex={workExperienceIndex}
    >
      {company.name}
    </EducationProviderSlashCompanyName>
  );
}
