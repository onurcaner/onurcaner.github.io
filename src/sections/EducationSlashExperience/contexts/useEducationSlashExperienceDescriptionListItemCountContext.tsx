import { useContext } from 'react';

import { EducationSlashExperienceDescriptionListItemCountContext } from './EducationSlashExperienceDescriptionListItemCountContext.tsx';

export function useEducationSlashWorkExperienceDescriptionListItemCountContext() {
  const context = useContext(
    EducationSlashExperienceDescriptionListItemCountContext,
  );
  if (!context) {
    throw new Error(
      'useEducationSlashWorkExperienceDescriptionListItemCountContext() is called outside of <EducationSlashExperienceDescriptionListItemCountContextProvider>',
    );
  }

  return context;
}
