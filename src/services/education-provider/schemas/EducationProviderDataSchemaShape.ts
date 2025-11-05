import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_base/schemas/ContentLanguageCodeSchema.ts';
import { LocationDataShape } from '@/services/location/schemas/LocationDataShape.ts';

export const EducationProviderDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Name: z.string().max(100),
  WebPageUrl: z.url(),
  LocationId: LocationDataShape.Id,
};
