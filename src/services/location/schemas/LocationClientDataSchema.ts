import { type ZodType, z } from 'zod';

import { LocationDataSchemaShape as SchemaShape } from '@/services/location/schemas/LocationDataSchemaShape.ts';
import { type LocationClientData } from '@/services/location/types/LocationClientData.ts';

export const LocationClientDataSchema: ZodType<LocationClientData> = z.object({
  id: new SchemaShape().id,
  contentLanguageCode: new SchemaShape().contentLanguageCode,

  countryName: new SchemaShape().countryName,
  countryCode: new SchemaShape().countryCode,
  cityName: new SchemaShape().cityName,
});
