import { useContext } from 'react';

import { EducationSlashWorkExperienceDescriptionListItemCountContext } from './EducationSlashWorkExperienceDescriptionListItemCountContext.tsx';

export function useEducationSlashWorkExperienceDescriptionListItemCountContext() {
  const context = useContext(
    EducationSlashWorkExperienceDescriptionListItemCountContext,
  );
  if (!context) {
    throw new Error(
      'useEducationSlashWorkExperienceDescriptionListItemCountContext() is called outside of <EducationSlashWorkExperienceDescriptionListItemCountContextProvider>',
    );
  }

  return context;
}
