import { type ZodType, z } from 'zod';

import { CompanyDataSchemaShape as SchemaShape } from '@/services/company/schemas/CompanyDataSchemaShape.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';

export const CompanyServerDataSchema: ZodType<CompanyServerData> = z.object({
  id: new SchemaShape().id,
  content_language_code: new SchemaShape().contentLanguageCode,

  name: new SchemaShape().name,
  web_page_url: new SchemaShape().webPageUrl,
  location_id: new SchemaShape().locationId,
});
