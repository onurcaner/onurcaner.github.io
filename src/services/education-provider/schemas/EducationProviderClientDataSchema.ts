import { type ZodType, z } from 'zod';

import { EducationProviderDataSchemaShape as SchemaShape } from '@/services/education-provider/schemas/EducationProviderDataSchemaShape.ts';
import { type EducationProviderClientData } from '@/services/education-provider/types/EducationProviderClientData.ts';

export const EducationProviderClientDataSchema: ZodType<EducationProviderClientData> =
  z.object({
    id: SchemaShape.Id,
    contentLanguageCode: SchemaShape.ContentLanguageCode,

    name: SchemaShape.Name,
    webPageUrl: SchemaShape.WebPageUrl,
    locationId: SchemaShape.LocationId,
  });
