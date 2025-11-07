import { type ZodType, z } from 'zod';

import { CallToActionContentDataSchemaShape as SchemaShape } from '@/services/call-to-action-content/schemas/CallToActionContentDataSchemaShape.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export const CallToActionContentServerDataSchema: ZodType<CallToActionContentServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    description: new SchemaShape().description,
  });
