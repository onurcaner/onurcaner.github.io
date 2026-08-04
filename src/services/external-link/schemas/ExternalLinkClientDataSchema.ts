import { type ZodType, z } from 'zod';

import { type ExternalLinkClientData } from '../types/ExternalLinkClientData.ts';

import { ExternalLinkDataSchemaShape as SchemaShape } from './ExternalLinkDataSchemaShape.ts';

export const ExternalLinkClientDataSchema: ZodType<ExternalLinkClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    label: new SchemaShape().label,
    url: new SchemaShape().url,
  });
