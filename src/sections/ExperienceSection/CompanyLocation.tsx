import { type ReactElement } from 'react';

import { useCompanyDataQuery } from '@/contexts/remote/company/useCompanyDataQuery.tsx';
import { useLocationDataQuery } from '@/contexts/remote/location/useLocationDataQuery.tsx';
import { type ExperienceClientData } from '@/services/experience/types/ExperienceClientData.ts';

import { EducationProviderSlashCompanyLocation } from '../EducationSlashExperience/components/EducationProviderSlashCompanyLocation.tsx';

export function CompanyLocation({
  experience,
  experienceIndex,
}: {
  experience: ExperienceClientData;
  experienceIndex: number;
}): ReactElement {
  const company = useCompanyDataQuery({
    id: experience.companyId,
  });
  const location = useLocationDataQuery({
    id: company.locationId,
  });

  return (
    <EducationProviderSlashCompanyLocation
      educationSlashExperienceIndex={experienceIndex}
    >
      {location.cityName}, {location.countryName}
    </EducationProviderSlashCompanyLocation>
  );
}
