import { type ZodType, z } from 'zod';

import { type EducationProviderClientData } from '../types/EducationProviderClientData.ts';

import { EducationProviderDataSchemaShape as SchemaShape } from './EducationProviderDataSchemaShape.ts';

export const EducationProviderClientDataSchema: ZodType<EducationProviderClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    webPageUrl: new SchemaShape().webPageUrl,
    locationId: new SchemaShape().locationId,
  });
