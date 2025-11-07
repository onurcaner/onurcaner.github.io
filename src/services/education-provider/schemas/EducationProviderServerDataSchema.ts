import { type ZodType, z } from 'zod';

import { EducationProviderDataSchemaShape as SchemaShape } from '@/services/education-provider/schemas/EducationProviderDataSchemaShape.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';

export const EducationProviderServerDataSchema: ZodType<EducationProviderServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    web_page_url: new SchemaShape().webPageUrl,
    location_id: new SchemaShape().locationId,
  });
