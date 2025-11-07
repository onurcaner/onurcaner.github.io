import { type ZodType, z } from 'zod';

import { DeveloperDataSchemaShape as SchemaShape } from '@/services/developer/schemas/DeveloperDataSchemaShape.ts';
import { type DeveloperClientData } from '@/services/developer/types/DeveloperClientData.ts';

export const DeveloperClientDataSchema: ZodType<DeveloperClientData> = z.object(
  {
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    jobTitle: new SchemaShape().jobTitle,
    externalLinkIds: new SchemaShape().externalLinkIds,
    isOpenToWork: new SchemaShape().isOpenToWork,
  },
);
