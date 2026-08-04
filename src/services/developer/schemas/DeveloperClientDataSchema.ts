import { type ZodType, z } from 'zod';

import { type DeveloperClientData } from '../types/DeveloperClientData.ts';

import { DeveloperDataSchemaShape as SchemaShape } from './DeveloperDataSchemaShape.ts';

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
