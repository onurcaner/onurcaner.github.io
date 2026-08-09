import { type ReactElement } from 'react';

import { useCompanyDataQuery } from '@/contexts/remote/company/useCompanyDataQuery.tsx';
import { useLocationDataQuery } from '@/contexts/remote/location/useLocationDataQuery.tsx';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

import { EducationProviderSlashCompanyLocation } from '../EducationSlashWorkExperience/components/EducationProviderSlashCompanyLocation.tsx';

export function CompanyLocation({
  workExperience,
  workExperienceIndex,
}: {
  workExperience: WorkExperienceClientData;
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
      educationSlashWorkExperienceIndex={workExperienceIndex}
    >
      {location.cityName}, {location.countryName}
    </EducationProviderSlashCompanyLocation>
  );
}
