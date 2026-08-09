import { createContext } from 'react';

export const EducationSlashWorkExperienceWaterfallContext = createContext<{
  educationSlashWorkExperienceTitleWaterfallLength: number[];
  educationSlashWorkExperienceDateRangeWaterfallLength: number[];
  educationProviderSlashCompanyNameWaterfallLength: number[];
  educationProviderSlashCompanyLocationWaterfallLength: number[];
  educationGradeSlashWorkExperienceLevelWaterfallLength: number[];
  educationSlashWorkExperienceDescriptionListTitleWaterfallLength: [][];
  educationSlashWorkExperienceDescriptionListItemIconWaterfallLength: [][];
  educationSlashWorkExperienceDescriptionListItemTextWaterfallLength: [][];
} | null>(null);
