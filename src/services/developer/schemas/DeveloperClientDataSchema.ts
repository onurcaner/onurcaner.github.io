import { type ZodType, z } from 'zod';

import { DeveloperDataSchemaShape as SchemaShape } from '@/services/developer/schemas/DeveloperDataSchemaShape.ts';
import { type DeveloperClientData } from '@/services/developer/types/DeveloperClientData.ts';

export const DeveloperClientDataSchema: ZodType<DeveloperClientData> = z.object(
  {
    id: SchemaShape.Id,
    contentLanguageCode: SchemaShape.ContentLanguageCode,

    name: SchemaShape.Name,
    jobTitle: SchemaShape.JobTitle,
    externalLinkIds: SchemaShape.ExternalLinkIds,
    isOpenToWork: SchemaShape.IsOpenToWork,
  },
);
