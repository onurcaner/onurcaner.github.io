import { type ReactElement } from 'react';

import { useEducationProviderDataQuery } from '@/contexts/remote/education-provider/useEducationProviderDataQuery.tsx';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationProviderSlashCompanyName } from '../EducationSlashExperience/components/EducationProviderSlashCompanyName.tsx';

export function EducationProviderName({
  education,
  educationIndex,
}: {
  education: EducationClientData;
  educationIndex: number;
}): ReactElement {
  const educationProvider = useEducationProviderDataQuery({
    id: education.educationProviderId,
  });

  return (
    <EducationProviderSlashCompanyName
      educationSlashExperienceIndex={educationIndex}
    >
      {educationProvider.name}
    </EducationProviderSlashCompanyName>
  );
}
