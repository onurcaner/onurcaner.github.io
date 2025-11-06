import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_schemas/ContentLanguageCodeSchema.ts';
import { type SchemaShape } from '@/services/_types/SchemaShape.ts';

export const LocationDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  CountryName: z.string().max(100),
  CountryCode: z.string().length(2),
  CityName: z.string().max(100),
} satisfies SchemaShape;
