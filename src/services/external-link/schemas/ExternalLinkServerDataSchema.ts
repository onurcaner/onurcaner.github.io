import { type ZodType, z } from 'zod';

import { type ExternalLinkServerData } from '../types/ExternalLinkServerData.ts';

import { ExternalLinkDataSchemaShape as SchemaShape } from './ExternalLinkDataSchemaShape.ts';

export const ExternalLinkServerDataSchema: ZodType<ExternalLinkServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    label: new SchemaShape().label,
    url: new SchemaShape().url,
  });
