import { useContext } from 'react';

import { EducationSlashExperienceDescriptionListItemCountContext } from './EducationSlashExperienceDescriptionListItemCountContext.tsx';

export function useEducationSlashExperienceDescriptionListItemCountContext() {
  const context = useContext(
    EducationSlashExperienceDescriptionListItemCountContext,
  );
  if (!context) {
    throw new Error(
      'useEducationSlashExperienceDescriptionListItemCountContext() is called outside of <EducationSlashExperienceDescriptionListItemCountContextProvider>',
    );
  }

  return context;
}
