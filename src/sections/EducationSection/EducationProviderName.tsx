import { type ReactElement } from 'react';

import { useEducationProviderDataQuery } from '@/contexts/remote/education-provider/useEducationProviderDataQuery.tsx';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

import { EducationProviderSlashCompanyName } from '../EducationSlashWorkExperience/components/EducationProviderSlashCompanyName.tsx';

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
      educationSlashWorkExperienceIndex={educationIndex}
    >
      {educationProvider.name}
    </EducationProviderSlashCompanyName>
  );
}
