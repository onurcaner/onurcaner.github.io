import { type ZodType, z } from 'zod';

import { ListDataSchemaShape as SchemaShape } from '@/services/list/schemas/ListDataSchemaShape.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';

export const ListServerDataSchema: ZodType<ListServerData> = z.object({
  id: SchemaShape.Id,
  content_language_code: SchemaShape.ContentLanguageCode,

  title: SchemaShape.Title,
  items: SchemaShape.Items,
});
