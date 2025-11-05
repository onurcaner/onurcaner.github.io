import { type ZodType, z } from 'zod';

import { CallToActionContentDataSchemaShape as SchemaShape } from '@/services/call-to-action-content/schemas/CallToActionContentDataSchemaShape.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';

export const CallToActionContentClientDataSchema: ZodType<CallToActionContentClientData> =
  z.object({
    id: SchemaShape.Id,
    contentLanguageCode: SchemaShape.ContentLanguageCode,

    title: SchemaShape.Title,
    description: SchemaShape.Description,
  });
