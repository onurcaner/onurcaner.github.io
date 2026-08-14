import { createContext } from 'react';

export const EducationSlashWorkExperienceWaterfallOffsetsContext =
  createContext<{
    educationSlashWorkExperienceWaterfallOffsets: number[];
    educationSlashWorkExperienceDescriptionListWaterfallOffsets: number[][];
  } | null>(null);
