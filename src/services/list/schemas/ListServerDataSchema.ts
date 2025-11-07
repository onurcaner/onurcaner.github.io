import { type ZodType, z } from 'zod';

import { ListDataSchemaShape as SchemaShape } from '@/services/list/schemas/ListDataSchemaShape.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';

export const ListServerDataSchema: ZodType<ListServerData> = z.object({
  id: new SchemaShape().id,
  content_language_code: new SchemaShape().contentLanguageCode,

  title: new SchemaShape().title,
  items: new SchemaShape().items,
});
