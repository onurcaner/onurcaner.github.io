import { type ZodType, z } from 'zod';

import { type SkillClientData } from '../types/SkillClientData.ts';

import { SkillDataSchemaShape as SchemaShape } from './SkillDataSchemaShape.ts';

export const SkillClientDataSchema: ZodType<SkillClientData> = z.object({
  id: new SchemaShape().id,
  contentLanguageCode: new SchemaShape().contentLanguageCode,

  name: new SchemaShape().name,
  label: new SchemaShape().label,
  associatedSkillCategories: new SchemaShape().associatedSkillCategories,
});
