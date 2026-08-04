import { type ZodType, z } from 'zod';

import { type ListServerData } from '../types/ListServerData.ts';

import { ListDataSchemaShape as SchemaShape } from './ListDataSchemaShape.ts';

export const ListServerDataSchema: ZodType<ListServerData> = z.object({
  id: new SchemaShape().id,
  content_language_code: new SchemaShape().contentLanguageCode,

  title: new SchemaShape().title,
  items: new SchemaShape().items,
});
