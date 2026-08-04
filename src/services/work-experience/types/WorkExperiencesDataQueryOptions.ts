import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { WorkExperienceCategory } from '../constants/WorkExperienceCategory.ts';

export interface WorkExperiencesDataQueryOptions {
  contentLanguageCode: ContentLanguageCode;
  associatedWorkExperienceCategories: WorkExperienceCategory[];
}
