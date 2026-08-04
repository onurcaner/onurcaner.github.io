import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { SkillCategory } from '../constants/SkillCategory.ts';
import { SkillName } from '../constants/SkillName.ts';

export interface SkillServerData {
  id: string;
  content_language_code: ContentLanguageCode;

  name: SkillName;
  label: string;
  associated_skill_categories: SkillCategory[];
}
