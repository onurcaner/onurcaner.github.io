import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_base/schemas/ContentLanguageCodeSchema.ts';

export const CallToActionContentShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Title: z.string().max(100),
  Description: z.string().max(1000),
};
