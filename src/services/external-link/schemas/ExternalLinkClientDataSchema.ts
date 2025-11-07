import { type ZodType, z } from 'zod';

import { ExternalLinkDataSchemaShape as SchemaShape } from '@/services/external-link/schemas/ExternalLinkDataSchemaShape.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';

export const ExternalLinkClientDataSchema: ZodType<ExternalLinkClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    label: new SchemaShape().label,
    url: new SchemaShape().url,
  });
