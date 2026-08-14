import { type ZodType, z } from 'zod';

import { type ExperienceServerData } from '../types/ExperienceServerData.ts';

import { ExperienceDataSchemaShape as SchemaShape } from './ExperienceDataSchemaShape.ts';

export const ExperienceServerDataSchema: ZodType<ExperienceServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    associated_experience_categories: new SchemaShape()
      .associatedExperienceCategories,
    company_id: new SchemaShape().companyId,
    start_date: new SchemaShape().dateIso,
    end_date: new SchemaShape().dateIso,
    level: new SchemaShape().level,
    description_list_ids: new SchemaShape().descriptionListIds,
  });
