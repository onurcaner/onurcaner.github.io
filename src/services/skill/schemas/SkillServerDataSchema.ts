import { type ZodType, z } from 'zod';

import { SkillDataSchemaShape as SchemaShape } from '@/services/skill/schemas/SkillDataSchemaShape.ts';
import { type SkillServerData } from '@/services/skill/types/SkillServerData.ts';

export const SkillServerDataSchema: ZodType<SkillServerData> = z.object({
  id: SchemaShape.Id,
  content_language_code: SchemaShape.ContentLanguageCode,

  name: SchemaShape.Name,
  label: SchemaShape.Label,
  associated_skill_categories: SchemaShape.AssociatedSkillCategories,
});
