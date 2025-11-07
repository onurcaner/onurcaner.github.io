import { type ZodType, z } from 'zod';

import { EducationProviderDataSchemaShape as SchemaShape } from '@/services/education-provider/schemas/EducationProviderDataSchemaShape.ts';
import { type EducationProviderClientData } from '@/services/education-provider/types/EducationProviderClientData.ts';

export const EducationProviderClientDataSchema: ZodType<EducationProviderClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    webPageUrl: new SchemaShape().webPageUrl,
    locationId: new SchemaShape().locationId,
  });
