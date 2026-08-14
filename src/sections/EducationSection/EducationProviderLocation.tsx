import { type ReactElement } from 'react';

import { useEducationProviderDataQuery } from '@/contexts/remote/education-provider/useEducationProviderDataQuery.tsx';
import { useLocationDataQuery } from '@/contexts/remote/location/useLocationDataQuery.tsx';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationProviderSlashCompanyLocation } from '../EducationSlashExperience/components/EducationProviderSlashCompanyLocation.tsx';

export function EducationProviderLocation({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  const educationProvider = useEducationProviderDataQuery({
    id: education.educationProviderId,
  });
  const location = useLocationDataQuery({
    id: educationProvider.locationId,
  });

  return (
    <EducationProviderSlashCompanyLocation
      educationSlashExperienceIndex={educationIndex}
    >
      {location.cityName}, {location.countryName}
    </EducationProviderSlashCompanyLocation>
  );
}
