import { type ZodType, z } from 'zod';

import { type WorkExperienceClientData } from '../types/WorkExperienceClientData.ts';

import { WorkExperienceDataSchemaShape as SchemaShape } from './WorkExperienceDataSchemaShape.ts';

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
    level: new SchemaShape().level,
    descriptionListIds: new SchemaShape().descriptionListIds,
  });
