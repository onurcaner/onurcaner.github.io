import { ContentLanguageCode } from '@/services/_constants/ContentLanguageCode.ts';
import { SkillCategory } from '@/services/skill/constants/SkillCategory.ts';
import { SkillName } from '@/services/skill/constants/SkillName.ts';

export interface SkillClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: SkillName;
  label: string;
  associatedSkillCategories: SkillCategory[];
}
