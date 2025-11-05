import { type ZodType, z } from 'zod';

import { EducationDataSchemaShape as SchemaShape } from '@/services/education/schemas/EducationDataSchemaShape.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';

export const EducationServerDataSchema: ZodType<EducationServerData> = z.object(
  {
    id: SchemaShape.Id,
    content_language_code: SchemaShape.ContentLanguageCode,

    title: SchemaShape.Title,
    education_provider_id: SchemaShape.EducationProviderId,
    start_date: SchemaShape.DateIso,
    end_date: SchemaShape.DateIso,
    grade_type: SchemaShape.GradeType,
    grade_value: SchemaShape.GradeValue,
    description_list_ids: SchemaShape.DescriptionListIds,
  },
);
