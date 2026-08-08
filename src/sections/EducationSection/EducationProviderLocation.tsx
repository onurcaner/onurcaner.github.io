import { type ReactElement } from 'react';

import { useEducationProviderDataQuery } from '@/contexts/remote/education-provider/useEducationProviderDataQuery.tsx';
import { useLocationDataQuery } from '@/contexts/remote/location/useLocationDataQuery.tsx';
import { EducationProviderSlashCompanyLocation } from '@/sections/EducationSlashWorkExperience/EducationProviderSlashCompanyLocation.tsx';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

export function EducationProviderLocation({
  education,
}: {
  education: EducationClientData;
}): ReactElement {
  const educationProvider = useEducationProviderDataQuery({
    id: education.educationProviderId,
  });
  const location = useLocationDataQuery({
    id: educationProvider.locationId,
  });

  return (
    <EducationProviderSlashCompanyLocation>
      {location.cityName}, {location.countryName}
    </EducationProviderSlashCompanyLocation>
  );
}
