import { type ZodType, z } from 'zod';

import { ListDataSchemaShape as SchemaShape } from '@/services/list/schemas/ListDataSchemaShape.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';

export const ListClientDataSchema: ZodType<ListClientData> = z.object({
  id: new SchemaShape().id,
  contentLanguageCode: new SchemaShape().contentLanguageCode,

  title: new SchemaShape().title,
  items: new SchemaShape().items,
});
