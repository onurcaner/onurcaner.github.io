import { type ContentLanguageCode } from '@/services/_base/constants/ContentLanguageCode.ts';
import { type SkillCategory } from '@/services/skill/constants/SkillCategory.ts';
import { type SkillName } from '@/services/skill/constants/SkillName.ts';

export interface SkillClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: SkillName;
  label: string;
  associatedSkillCategories: SkillCategory[];
}
