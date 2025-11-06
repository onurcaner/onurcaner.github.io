import { type ZodType, z } from 'zod';

import { SkillDataSchemaShape as SchemaShape } from '@/services/skill/schemas/SkillDataSchemaShape.ts';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';

export const SkillClientDataSchema: ZodType<SkillClientData> = z.object({
  id: SchemaShape.Id,
  contentLanguageCode: SchemaShape.ContentLanguageCode,

  name: SchemaShape.Name,
  label: SchemaShape.Label,
  associatedSkillCategories: SchemaShape.AssociatedSkillCategories,
});
