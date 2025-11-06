import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_schemas/ContentLanguageCodeSchema.ts';
import { type SchemaShape } from '@/services/_types/SchemaShape.ts';
import { LocationDataSchemaShape } from '@/services/location/schemas/LocationDataSchemaShape.ts';

export const EducationProviderDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Name: z.string().max(100),
  WebPageUrl: z.url(),
  LocationId: LocationDataSchemaShape.Id,
} satisfies SchemaShape;
