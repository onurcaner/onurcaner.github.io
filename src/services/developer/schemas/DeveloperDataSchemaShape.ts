import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_base/schemas/ContentLanguageCodeSchema.ts';
import { ExternalLinkDataSchemaShape } from '@/services/external-link/schemas/ExternalLinkDataSchemaShape.ts';

export const DeveloperDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Name: z.string().max(100),
  JobTitle: z.string().max(100),
  ExternalLinkIds: z.array(ExternalLinkDataSchemaShape.Id).max(20),
  IsOpenToWork: z.boolean(),
};
