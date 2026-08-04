import { type ZodType, z } from 'zod';

import { type SkillServerData } from '../types/SkillServerData.ts';

import { SkillDataSchemaShape as SchemaShape } from './SkillDataSchemaShape.ts';

export const SkillServerDataSchema: ZodType<SkillServerData> = z.object({
  id: new SchemaShape().id,
  content_language_code: new SchemaShape().contentLanguageCode,

  name: new SchemaShape().name,
  label: new SchemaShape().label,
  associated_skill_categories: new SchemaShape().associatedSkillCategories,
});
