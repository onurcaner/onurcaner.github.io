import { useContext } from 'react';

import { EducationSlashExperienceWaterfallOffsetsContext } from './EducationSlashExperienceWaterfallOffsetsContext.tsx';

export function useEducationSlashExperienceWaterfallOffsetsContext() {
  const context = useContext(EducationSlashExperienceWaterfallOffsetsContext);
  if (!context) {
    throw new Error(
      'useEducationSlashExperienceWaterfallOffsetsContext() is called outside of <EducationSlashExperienceWaterfallOffsetsContextProvider>',
    );
  }

  return context;
}
