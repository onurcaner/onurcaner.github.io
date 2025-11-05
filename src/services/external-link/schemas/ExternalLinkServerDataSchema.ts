import { type ZodType, z } from 'zod';

import { ExternalLinkDataSchemaShape as SchemaShape } from '@/services/external-link/schemas/ExternalLinkDataSchemaShape.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';

export const ExternalLinkServerDataSchema: ZodType<ExternalLinkServerData> =
  z.object({
    id: SchemaShape.Id,
    content_language_code: SchemaShape.ContentLanguageCode,

    name: SchemaShape.Name,
    label: SchemaShape.Label,
    url: SchemaShape.Url,
  });
