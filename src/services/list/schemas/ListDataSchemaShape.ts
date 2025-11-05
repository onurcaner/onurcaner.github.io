import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_base/schemas/ContentLanguageCodeSchema.ts';

export const ListDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Title: z.string().max(100),
  Items: z.array(z.string().max(100)).max(20),
};
