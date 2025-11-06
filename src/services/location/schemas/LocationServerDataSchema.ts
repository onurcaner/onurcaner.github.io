import { type ZodType, z } from 'zod';

import { LocationDataSchemaShape as SchemaShape } from '@/services/location/schemas/LocationDataSchemaShape.ts';
import { type LocationServerData } from '@/services/location/types/LocationServerData.ts';

export const LocationServerDataSchema: ZodType<LocationServerData> = z.object({
  id: SchemaShape.Id,
  content_language_code: SchemaShape.ContentLanguageCode,

  country_name: SchemaShape.CountryName,
  country_code: SchemaShape.CountryCode,
  city_name: SchemaShape.CityName,
});
