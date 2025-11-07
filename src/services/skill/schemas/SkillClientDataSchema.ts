import { type ZodType, z } from 'zod';

import { SkillDataSchemaShape as SchemaShape } from '@/services/skill/schemas/SkillDataSchemaShape.ts';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';

export const SkillClientDataSchema: ZodType<SkillClientData> = z.object({
  id: new SchemaShape().id,
  contentLanguageCode: new SchemaShape().contentLanguageCode,

  name: new SchemaShape().name,
  label: new SchemaShape().label,
  associatedSkillCategories: new SchemaShape().associatedSkillCategories,
});
