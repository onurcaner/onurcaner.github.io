import { type ZodType, z } from 'zod';

import { WorkExperienceDataSchemaShape as SchemaShape } from '@/services/work-experience/schemas/WorkExperienceDataSchemaShape.ts';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';

export const WorkExperienceClientDataSchema: ZodType<WorkExperienceClientData> =
  z.object({
    id: SchemaShape.Id,
    contentLanguageCode: SchemaShape.ContentLanguageCode,

    title: SchemaShape.Title,
    associatedWorkExperienceCategories:
      SchemaShape.AssociatedWorkExperienceCategories,
    companyId: SchemaShape.CompanyId,
    startDate: SchemaShape.DateObject,
    endDate: SchemaShape.DateObject,
    descriptionListIds: SchemaShape.DescriptionListIds,
  });
