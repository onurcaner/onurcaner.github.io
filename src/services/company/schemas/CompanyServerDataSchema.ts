import { type ZodType, z } from 'zod';

import { CompanyDataSchemaShape as SchemaShape } from '@/services/company/schemas/CompanyDataSchemaShape.ts';
import { type CompanyServerData } from '@/services/company/types/CompanyServerData.ts';

export const CompanyServerDataSchema: ZodType<CompanyServerData> = z.object({
  id: SchemaShape.Id,
  content_language_code: SchemaShape.ContentLanguageCode,

  name: SchemaShape.Name,
  web_page_url: SchemaShape.WebPageUrl,
  location_id: SchemaShape.LocationId,
});
