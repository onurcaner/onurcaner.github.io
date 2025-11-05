import { type ZodType, z } from 'zod';

import { EducationProviderDataSchemaShape as SchemaShape } from '@/services/education-provider/schemas/EducationProviderDataSchemaShape.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';

export const EducationProviderServerDataSchema: ZodType<EducationProviderServerData> =
  z.object({
    id: SchemaShape.Id,
    content_language_code: SchemaShape.ContentLanguageCode,

    name: SchemaShape.Name,
    web_page_url: SchemaShape.WebPageUrl,
    location_id: SchemaShape.LocationId,
  });
