import { type ZodType, z } from 'zod';

import { CallToActionContentDataSchemaShape as SchemaShape } from '@/services/call-to-action-content/schemas/CallToActionContentDataSchemaShape.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';

export const CallToActionContentClientDataSchema: ZodType<CallToActionContentClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    description: new SchemaShape().description,
  });
