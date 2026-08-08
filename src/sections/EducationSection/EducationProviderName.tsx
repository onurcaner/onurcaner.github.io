import { type ReactElement } from 'react';

import { useEducationProviderDataQuery } from '@/contexts/remote/education-provider/useEducationProviderDataQuery.tsx';
import { EducationProviderSlashCompanyName } from '@/sections/EducationSlashWorkExperience/EducationProviderSlashCompanyName.tsx';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

export function EducationProviderName({
  education,
}: {
  education: EducationClientData;
}): ReactElement {
  const educationProvider = useEducationProviderDataQuery({
    id: education.educationProviderId,
  });

  return (
    <EducationProviderSlashCompanyName>
      {educationProvider.name}
    </EducationProviderSlashCompanyName>
  );
}
