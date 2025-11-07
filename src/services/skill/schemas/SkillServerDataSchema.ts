import { type ZodType, z } from 'zod';

import { SkillDataSchemaShape as SchemaShape } from '@/services/skill/schemas/SkillDataSchemaShape.ts';
import { type SkillServerData } from '@/services/skill/types/SkillServerData.ts';

export const SkillServerDataSchema: ZodType<SkillServerData> = z.object({
  id: new SchemaShape().id,
  content_language_code: new SchemaShape().contentLanguageCode,

  name: new SchemaShape().name,
  label: new SchemaShape().label,
  associated_skill_categories: new SchemaShape().associatedSkillCategories,
});
