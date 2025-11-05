import { type ZodType, z } from 'zod';

import { DeveloperDataSchemaShape as SchemaShape } from '@/services/developer/schemas/DeveloperDataSchemaShape.ts';
import { type DeveloperServerData } from '@/services/developer/types/DeveloperServerData.ts';

export const DeveloperServerDataSchema: ZodType<DeveloperServerData> = z.object(
  {
    id: SchemaShape.Id,
    content_language_code: SchemaShape.ContentLanguageCode,

    name: SchemaShape.Name,
    job_title: SchemaShape.JobTitle,
    external_link_ids: SchemaShape.ExternalLinkIds,
    is_open_to_work: SchemaShape.IsOpenToWork,
  },
);
