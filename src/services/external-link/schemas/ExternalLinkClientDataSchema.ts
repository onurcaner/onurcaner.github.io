import { type ZodType, z } from 'zod';

import { ExternalLinkDataSchemaShape as SchemaShape } from '@/services/external-link/schemas/ExternalLinkDataSchemaShape.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';

export const ExternalLinkClientDataSchema: ZodType<ExternalLinkClientData> =
  z.object({
    id: SchemaShape.Id,
    contentLanguageCode: SchemaShape.ContentLanguageCode,

    name: SchemaShape.Name,
    label: SchemaShape.Label,
    url: SchemaShape.Url,
  });
