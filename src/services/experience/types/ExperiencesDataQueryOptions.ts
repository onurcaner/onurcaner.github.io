import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { ExperienceCategory } from '../constants/ExperienceCategory.ts';

export interface ExperiencesDataQueryOptions {
  contentLanguageCode: ContentLanguageCode;
  associatedExperienceCategories: ExperienceCategory[];
}
