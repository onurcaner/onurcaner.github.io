import { type ZodType, z } from 'zod';

import { type CallToActionContentClientData } from '../types/CallToActionContentClientData.ts';

import { CallToActionContentDataSchemaShape as SchemaShape } from './CallToActionContentDataSchemaShape.ts';

export const CallToActionContentClientDataSchema: ZodType<CallToActionContentClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    description: new SchemaShape().description,
  });
