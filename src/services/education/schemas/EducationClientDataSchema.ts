import { type ZodType, z } from 'zod';

import { EducationDataSchemaShape as SchemaShape } from '@/services/education/schemas/EducationDataSchemaShape.ts';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

export const EducationClientDataSchema: ZodType<EducationClientData> = z.object(
  {
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    educationProviderId: new SchemaShape().educationProviderId,
    startDate: new SchemaShape().dateObject,
    endDate: new SchemaShape().dateObject,
    gradeType: new SchemaShape().gradeType,
    gradeValue: new SchemaShape().gradeValue,
    descriptionListIds: new SchemaShape().descriptionListIds,
  },
);
