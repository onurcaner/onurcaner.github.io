import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_schemas/ContentLanguageCodeSchema.ts';
import { type SchemaShape } from '@/services/_types/SchemaShape.ts';

export const HeroContentDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Title: z.string().max(100),
  Description: z.string().max(1000),
} satisfies SchemaShape;
