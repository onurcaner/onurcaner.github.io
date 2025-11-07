import { type ZodType, z } from 'zod';

import { WorkExperienceDataSchemaShape as SchemaShape } from '@/services/work-experience/schemas/WorkExperienceDataSchemaShape.ts';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

export const WorkExperienceClientDataSchema: ZodType<WorkExperienceClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    associatedWorkExperienceCategories: new SchemaShape()
      .associatedWorkExperienceCategories,
    companyId: new SchemaShape().companyId,
    startDate: new SchemaShape().dateObject,
    endDate: new SchemaShape().dateObject,
    descriptionListIds: new SchemaShape().descriptionListIds,
  });
