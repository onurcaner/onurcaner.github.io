import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_schemas/ContentLanguageCodeSchema.ts';
import { type SchemaShape } from '@/services/_types/SchemaShape.ts';
import { EducationProviderDataSchemaShape } from '@/services/education-provider/schemas/EducationProviderDataSchemaShape.ts';
import { ListDataSchemaShape } from '@/services/list/schemas/ListDataSchemaShape.ts';

export const EducationDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Title: z.string().max(100),
  EducationProviderId: EducationProviderDataSchemaShape.Id,
  DateObject: z.date(),
  DateIso: z.iso.date(),
  GradeType: z.string().max(20),
  GradeValue: z.string().max(20),
  DescriptionListIds: z.array(ListDataSchemaShape.Id).max(20),
} satisfies SchemaShape;
