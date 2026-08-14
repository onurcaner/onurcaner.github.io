import { type ReactElement } from 'react';

import { useCompanyDataQuery } from '@/contexts/remote/company/useCompanyDataQuery.tsx';
import { useLocationDataQuery } from '@/contexts/remote/location/useLocationDataQuery.tsx';
import { EducationProviderSlashCompanyLocation } from '@/sections/EducationSlashExperience/components/EducationProviderSlashCompanyLocation.tsx';
import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

export function CompanyLocation({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: ExperienceClientData;
  workExperienceIndex: number;
}): ReactElement {
  const company = useCompanyDataQuery({
    id: workExperience.companyId,
  });
  const location = useLocationDataQuery({
    id: company.locationId,
  });

  return (
    <EducationProviderSlashCompanyLocation
      educationSlashExperienceIndex={workExperienceIndex}
    >
      {location.cityName}, {location.countryName}
    </EducationProviderSlashCompanyLocation>
  );
}
