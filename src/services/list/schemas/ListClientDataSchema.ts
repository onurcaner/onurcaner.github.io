import { type ZodType, z } from 'zod';

import { type ListClientData } from '../types/ListClientData.ts';

import { ListDataSchemaShape as SchemaShape } from './ListDataSchemaShape.ts';

export const ListClientDataSchema: ZodType<ListClientData> = z.object({
  id: new SchemaShape().id,
  contentLanguageCode: new SchemaShape().contentLanguageCode,

  title: new SchemaShape().title,
  items: new SchemaShape().items,
});
