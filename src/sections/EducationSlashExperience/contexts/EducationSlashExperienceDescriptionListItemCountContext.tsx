import { createContext } from 'react';

export const EducationSlashExperienceDescriptionListItemCountContext =
  createContext<{
    itemCountMatrix: number[][];

    setItemCount: (options: {
      educationSlashExperienceIndex: number;
      descriptionListIndex: number;
      newItemCount: number;
    }) => void;

    resetItemCounts: (options: {
      educationSlashExperienceIndex: number;
      descriptionListCount: number;
    }) => void;
  } | null>(null);
