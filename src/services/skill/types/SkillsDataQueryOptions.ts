import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { SkillCategory } from '@/services/skill/constants/SkillCategory.ts';

export interface SkillsDataQueryOptions {
  contentLanguageCode: ContentLanguageCode;
  associatedSkillCategories: SkillCategory[];
}
