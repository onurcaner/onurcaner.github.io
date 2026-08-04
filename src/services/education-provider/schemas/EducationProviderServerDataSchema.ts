import { type ZodType, z } from 'zod';

import { type EducationProviderServerData } from '../types/EducationProviderServerData.ts';

import { EducationProviderDataSchemaShape as SchemaShape } from './EducationProviderDataSchemaShape.ts';

export const EducationProviderServerDataSchema: ZodType<EducationProviderServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    web_page_url: new SchemaShape().webPageUrl,
    location_id: new SchemaShape().locationId,
  });
