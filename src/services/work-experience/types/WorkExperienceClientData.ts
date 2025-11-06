import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { WorkExperienceCategory } from '@/services/work-experience/constants/WorkExperienceCategory.ts';

export interface WorkExperienceClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  title: string;
  associatedWorkExperienceCategories: WorkExperienceCategory[];
  companyId: string;
  startDate: Date;
  endDate: Date;
  descriptionListIds: string[];
}
