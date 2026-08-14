import { type ZodType, z } from 'zod';

import { type WorkExperienceServerData } from '../types/WorkExperienceServerData.ts';

import { WorkExperienceDataSchemaShape as SchemaShape } from './WorkExperienceDataSchemaShape.ts';

export const WorkExperienceServerDataSchema: ZodType<WorkExperienceServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    associated_work_experience_categories: new SchemaShape()
      .associatedWorkExperienceCategories,
    company_id: new SchemaShape().companyId,
    start_date: new SchemaShape().dateIso,
    end_date: new SchemaShape().dateIso,
    level: new SchemaShape().level,
    description_list_ids: new SchemaShape().descriptionListIds,
  });
