import { type ZodType, z } from 'zod';

import { type CompanyServerData } from '../types/CompanyServerData.ts';

import { CompanyDataSchemaShape as SchemaShape } from './CompanyDataSchemaShape.ts';

export const CompanyServerDataSchema: ZodType<CompanyServerData> = z.object({
  id: new SchemaShape().id,
  content_language_code: new SchemaShape().contentLanguageCode,

  name: new SchemaShape().name,
  web_page_url: new SchemaShape().webPageUrl,
  location_id: new SchemaShape().locationId,
});
