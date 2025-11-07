import { type ZodType, z } from 'zod';

import { ExternalLinkDataSchemaShape as SchemaShape } from '@/services/external-link/schemas/ExternalLinkDataSchemaShape.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';

export const ExternalLinkServerDataSchema: ZodType<ExternalLinkServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    label: new SchemaShape().label,
    url: new SchemaShape().url,
  });
