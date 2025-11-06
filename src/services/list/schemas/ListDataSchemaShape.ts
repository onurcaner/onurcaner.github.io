import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_schemas/ContentLanguageCodeSchema.ts';
import { type SchemaShape } from '@/services/_types/SchemaShape.ts';

export const ListDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Title: z.string().max(100),
  Items: z.array(z.string().max(100)).max(20),
} satisfies SchemaShape;
