import { type ZodType, z } from 'zod';

import { type CallToActionContentServerData } from '../types/CallToActionContentServerData.ts';

import { CallToActionContentDataSchemaShape as SchemaShape } from './CallToActionContentDataSchemaShape.ts';

export const CallToActionContentServerDataSchema: ZodType<CallToActionContentServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    description: new SchemaShape().description,
  });
