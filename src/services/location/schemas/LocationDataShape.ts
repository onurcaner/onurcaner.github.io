import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_base/schemas/ContentLanguageCodeSchema.ts';

export const LocationDataShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  CountryName: z.string().max(100),
  CountryCode: z.string().length(2),
  CityName: z.string().max(100),
};
