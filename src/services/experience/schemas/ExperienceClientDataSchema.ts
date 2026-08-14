import { type ZodType, z } from 'zod';

import { type ExperienceClientData } from '../types/ExperienceClientData.ts';

import { ExperienceDataSchemaShape as SchemaShape } from './ExperienceDataSchemaShape.ts';

export const ExperienceClientDataSchema: ZodType<ExperienceClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    associatedExperienceCategories: new SchemaShape()
      .associatedExperienceCategories,
    companyId: new SchemaShape().companyId,
    startDate: new SchemaShape().dateObject,
    endDate: new SchemaShape().dateObject,
    level: new SchemaShape().level,
    descriptionListIds: new SchemaShape().descriptionListIds,
  });
