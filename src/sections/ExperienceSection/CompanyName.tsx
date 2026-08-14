import { type ReactElement } from 'react';

import { useCompanyDataQuery } from '@/contexts/remote/company/useCompanyDataQuery.tsx';
import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

import { EducationProviderSlashCompanyName } from '../EducationSlashExperience/components/EducationProviderSlashCompanyName.tsx';

export function CompanyName({
  experience,
  experienceIndex,
}: {
  experience: ExperienceClientData;
  experienceIndex: number;
}): ReactElement {
  const company = useCompanyDataQuery({
    id: experience.companyId,
  });

  return (
    <EducationProviderSlashCompanyName
      educationSlashExperienceIndex={experienceIndex}
    >
      {company.name}
    </EducationProviderSlashCompanyName>
  );
}
