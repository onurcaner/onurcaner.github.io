import { type ZodType, z } from 'zod';

import { WorkExperienceDataSchemaShape as SchemaShape } from '@/services/work-experience/schemas/WorkExperienceDataSchemaShape.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';

export const WorkExperienceServerDataSchema: ZodType<WorkExperienceServerData> =
  z.object({
    id: SchemaShape.Id,
    content_language_code: SchemaShape.ContentLanguageCode,

    title: SchemaShape.Title,
    associated_work_experience_categories:
      SchemaShape.AssociatedWorkExperienceCategories,
    company_id: SchemaShape.CompanyId,
    start_date: SchemaShape.DateIso,
    end_date: SchemaShape.DateIso,
    description_list_ids: SchemaShape.DescriptionListIds,
  });
