import { type ZodType, z } from 'zod';

import { type LocationServerData } from '../types/LocationServerData.ts';

import { LocationDataSchemaShape as SchemaShape } from './LocationDataSchemaShape.ts';

export const LocationServerDataSchema: ZodType<LocationServerData> = z.object({
  id: new SchemaShape().id,
  content_language_code: new SchemaShape().contentLanguageCode,

  country_name: new SchemaShape().countryName,
  country_code: new SchemaShape().countryCode,
  city_name: new SchemaShape().cityName,
});
