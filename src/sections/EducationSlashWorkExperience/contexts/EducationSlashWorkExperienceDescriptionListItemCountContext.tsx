import { createContext } from 'react';

export const EducationSlashWorkExperienceDescriptionListItemCountContext =
  createContext<{
    itemCountMatrix: number[][];

    setItemCount: (options: {
      educationSlashWorkExperienceIndex: number;
      descriptionListIndex: number;
      newItemCount: number;
    }) => void;

    resetItemCounts: (options: {
      educationSlashWorkExperienceIndex: number;
      descriptionListCount: number;
    }) => void;
  } | null>(null);
