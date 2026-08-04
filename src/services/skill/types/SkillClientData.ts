import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';

import { SkillCategory } from '../constants/SkillCategory.ts';
import { SkillName } from '../constants/SkillName.ts';

export interface SkillClientData {
  id: string;
  contentLanguageCode: ContentLanguageCode;

  name: SkillName;
  label: string;
  associatedSkillCategories: SkillCategory[];
}
