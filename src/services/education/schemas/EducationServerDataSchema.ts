import { type ZodType, z } from 'zod';

import { type EducationServerData } from '../types/EducationServerData.ts';

import { EducationDataSchemaShape as SchemaShape } from './EducationDataSchemaShape.ts';

export const EducationServerDataSchema: ZodType<EducationServerData> = z.object(
  {
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    education_provider_id: new SchemaShape().educationProviderId,
    start_date: new SchemaShape().dateIso,
    end_date: new SchemaShape().dateIso,
    grade_type: new SchemaShape().gradeType,
    grade_value: new SchemaShape().gradeValue,
    description_list_ids: new SchemaShape().descriptionListIds,
  },
);
