import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_schemas/ContentLanguageCodeSchema.ts';
import { type SchemaShape } from '@/services/_types/SchemaShape.ts';
import { CompanyDataSchemaShape } from '@/services/company/schemas/CompanyDataSchemaShape.ts';
import { ListDataSchemaShape } from '@/services/list/schemas/ListDataSchemaShape.ts';
import { WorkExperienceCategory } from '@/services/work-experience/constants/WorkExperienceCategory.ts';

export const WorkExperienceDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Title: z.string().max(100),
  AssociatedWorkExperienceCategories: z
    .array(
      z.enum([
        WorkExperienceCategory.BackendDevelopment,
        WorkExperienceCategory.FrontendDevelopment,
        WorkExperienceCategory.SoftwareDevelopment,
      ]),
    )
    .max(20),
  CompanyId: CompanyDataSchemaShape.Id,
  DateObject: z.date(),
  DateIso: z.iso.date(),
  DescriptionListIds: z.array(ListDataSchemaShape.Id).max(20),
} satisfies SchemaShape;
