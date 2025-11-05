import { type ZodType, z } from 'zod';

import { CompanyDataSchemaShape as SchemaShape } from '@/services/company/schemas/CompanyDataSchemaShape.ts';
import { type CompanyClientData } from '@/services/company/types/CompanyClientData.ts';

export const CompanyClientDataSchema: ZodType<CompanyClientData> = z.object({
  id: SchemaShape.Id,
  contentLanguageCode: SchemaShape.ContentLanguageCode,

  name: SchemaShape.Name,
  webPageUrl: SchemaShape.WebPageUrl,
  locationId: SchemaShape.LocationId,
});
