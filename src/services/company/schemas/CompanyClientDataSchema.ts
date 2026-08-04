import { type ZodType, z } from 'zod';

import { type CompanyClientData } from '../types/CompanyClientData.ts';

import { CompanyDataSchemaShape as SchemaShape } from './CompanyDataSchemaShape.ts';

export const CompanyClientDataSchema: ZodType<CompanyClientData> = z.object({
  id: new SchemaShape().id,
  contentLanguageCode: new SchemaShape().contentLanguageCode,

  name: new SchemaShape().name,
  webPageUrl: new SchemaShape().webPageUrl,
  locationId: new SchemaShape().locationId,
});
