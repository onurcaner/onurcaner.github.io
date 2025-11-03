import { type ZodType, z } from 'zod';

import { CallToActionContentShape as DAS } from '@/services/call-to-action-content/schemas/CallToActionContentShape.ts';
import { type CallToActionContentClientData } from '@/services/call-to-action-content/types/CallToActionContentClientData.ts';

export const CallToActionContentClientDataSchema: ZodType<CallToActionContentClientData> =
  z.object({
    id: DAS.Id,
    contentLanguageCode: DAS.ContentLanguageCode,

    title: DAS.Title,
    description: DAS.Description,
  });
