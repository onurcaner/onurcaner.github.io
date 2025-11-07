import { type ZodType, z } from 'zod';

import { CompanyDataSchemaShape as SchemaShape } from '@/services/company/schemas/CompanyDataSchemaShape.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';

export const CompanyClientDataSchema: ZodType<CompanyClientData> = z.object({
  id: new SchemaShape().id,
  contentLanguageCode: new SchemaShape().contentLanguageCode,

  name: new SchemaShape().name,
  webPageUrl: new SchemaShape().webPageUrl,
  locationId: new SchemaShape().locationId,
});
