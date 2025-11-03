import { type ZodType, z } from 'zod';

import { CallToActionContentShape as CS } from '@/services/call-to-action-content/schemas/CallToActionContentShape.ts';
import type { CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export const CallToActionContentServerDataSchema: ZodType<CallToActionContentServerData> =
  z.object({
    id: CS.Id,
    content_language_code: CS.ContentLanguageCode,

    title: CS.Title,
    description: CS.Description,
  });
