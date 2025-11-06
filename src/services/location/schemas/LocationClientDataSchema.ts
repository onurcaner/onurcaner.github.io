import { type ZodType, z } from 'zod';

import { LocationDataSchemaShape as SchemaShape } from '@/services/location/schemas/LocationDataSchemaShape.ts';
import { type LocationClientData } from '@/services/location/types/LocationClientData.ts';

export const LocationClientDataSchema: ZodType<LocationClientData> = z.object({
  id: SchemaShape.Id,
  contentLanguageCode: SchemaShape.ContentLanguageCode,

  countryName: SchemaShape.CountryName,
  countryCode: SchemaShape.CountryCode,
  cityName: SchemaShape.CityName,
});
