import { type ZodType, z } from 'zod';

import { EducationDataSchemaShape as SchemaShape } from '@/services/education/schemas/EducationDataSchemaShape.ts';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';

export const EducationClientDataSchema: ZodType<EducationClientData> = z.object(
  {
    id: SchemaShape.Id,
    contentLanguageCode: SchemaShape.ContentLanguageCode,

    title: SchemaShape.Title,
    educationProviderId: SchemaShape.EducationProviderId,
    startDate: SchemaShape.DateObject,
    endDate: SchemaShape.DateObject,
    gradeType: SchemaShape.GradeType,
    gradeValue: SchemaShape.GradeValue,
    descriptionListIds: SchemaShape.DescriptionListIds,
  },
);
