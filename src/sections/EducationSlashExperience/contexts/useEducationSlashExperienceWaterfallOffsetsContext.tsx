import { useContext } from 'react';

import { EducationSlashWorkExperienceWaterfallOffsetsContext } from './EducationSlashWorkExperienceWaterfallOffsetsContext.tsx';

export function useEducationSlashWorkExperienceWaterfallOffsetsContext() {
  const context = useContext(
    EducationSlashWorkExperienceWaterfallOffsetsContext,
  );
  if (!context) {
    throw new Error(
      'useEducationSlashWorkExperienceWaterfallOffsetsContext() is called outside of <EducationSlashWorkExperienceWaterfallOffsetsContextProvider>',
    );
  }

  return context;
}
