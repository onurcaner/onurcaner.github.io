import { createContext } from 'react';

export const EducationSlashExperienceWaterfallOffsetsContext = createContext<{
  educationSlashExperienceWaterfallOffsets: number[];
  educationSlashExperienceDescriptionListWaterfallOffsets: number[][];
} | null>(null);
