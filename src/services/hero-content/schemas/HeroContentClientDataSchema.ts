import { type ZodType, z } from 'zod';

import { type HeroContentClientData } from '../types/HeroContentClientData.ts';

import { HeroContentDataSchemaShape as SchemaShape } from './HeroContentDataSchemaShape.ts';

export const HeroContentClientDataSchema: ZodType<HeroContentClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    description: new SchemaShape().description,
  });
