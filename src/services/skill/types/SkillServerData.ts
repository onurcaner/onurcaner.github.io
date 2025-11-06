import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { SkillCategory } from '@/services/skill/constants/SkillCategory.ts';
import { SkillName } from '@/services/skill/constants/SkillName.ts';

export interface SkillServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  name: SkillName;
  label: string;
  associated_skill_categories: SkillCategory[];
}
