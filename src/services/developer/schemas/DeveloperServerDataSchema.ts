import { type ZodType, z } from 'zod';

import { DeveloperDataSchemaShape as SchemaShape } from '@/services/developer/schemas/DeveloperDataSchemaShape.ts';
import { type DeveloperServerData } from '@/services/developer/types/DeveloperServerData.ts';

export const DeveloperServerDataSchema: ZodType<DeveloperServerData> = z.object(
  {
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    name: new SchemaShape().name,
    job_title: new SchemaShape().jobTitle,
    external_link_ids: new SchemaShape().externalLinkIds,
    is_open_to_work: new SchemaShape().isOpenToWork,
  },
);
