import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_schemas/ContentLanguageCodeSchema.ts';
import { type SchemaShape } from '@/services/_types/SchemaShape.ts';
import { ExternalLinkName } from '@/services/external-link/constants/ExternalLinkName.ts';

export const ExternalLinkDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Name: z.enum([
    ExternalLinkName.GitHub,
    ExternalLinkName.LinkedIn,
    ExternalLinkName.PersonalPage,
    ExternalLinkName.Other,
  ]),
  Label: z.string().max(100),
  Url: z.url(),
} satisfies SchemaShape;
