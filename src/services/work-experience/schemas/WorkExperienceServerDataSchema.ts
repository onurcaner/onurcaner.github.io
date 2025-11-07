import { type ZodType, z } from 'zod';

import { WorkExperienceDataSchemaShape as SchemaShape } from '@/services/work-experience/schemas/WorkExperienceDataSchemaShape.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';

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
    description_list_ids: new SchemaShape().descriptionListIds,
  });
