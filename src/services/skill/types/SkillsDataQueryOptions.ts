import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { SkillCategory } from '../constants/SkillCategory.ts';

export interface SkillsDataQueryOptions {
  contentLanguageCode: ContentLanguageCode;
  associatedSkillCategories: SkillCategory[];
}
