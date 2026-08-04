import { type ZodType, z } from 'zod';

import { type LocationClientData } from '../types/LocationClientData.ts';

import { LocationDataSchemaShape as SchemaShape } from './LocationDataSchemaShape.ts';

export const LocationClientDataSchema: ZodType<LocationClientData> = z.object({
  id: new SchemaShape().id,
  contentLanguageCode: new SchemaShape().contentLanguageCode,

  countryName: new SchemaShape().countryName,
  countryCode: new SchemaShape().countryCode,
  cityName: new SchemaShape().cityName,
});
