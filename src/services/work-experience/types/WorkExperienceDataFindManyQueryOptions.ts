import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { WorkExperienceCategory } from '@/services/work-experience/constants/WorkExperienceCategory.ts';

export interface WorkExperienceDataFindManyQueryOptions {
  contentLanguageCode: ContentLanguageCode;
  associatedWorkExperienceCategories: WorkExperienceCategory[];
}
