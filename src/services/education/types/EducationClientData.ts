import type { ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';

export interface EducationClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  educationProviderId: string;
  startDate: Date;
  endDate: Date;
  gradeType: string;
  gradeValue: string;
  descriptionListIds: string[];
}
