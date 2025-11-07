import { type ZodType, z } from 'zod';

import { LocationDataSchemaShape as SchemaShape } from '@/services/location/schemas/LocationDataSchemaShape.ts';
import { type LocationServerData } from '@/services/location/types/LocationServerData.ts';

export const LocationServerDataSchema: ZodType<LocationServerData> = z.object({
  id: new SchemaShape().id,
  content_language_code: new SchemaShape().contentLanguageCode,

  country_name: new SchemaShape().countryName,
  country_code: new SchemaShape().countryCode,
  city_name: new SchemaShape().cityName,
});
