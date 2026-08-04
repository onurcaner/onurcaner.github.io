import { type ZodType, z } from 'zod';

import { type HeroContentServerData } from '../types/HeroContentServerData.ts';

import { HeroContentDataSchemaShape as SchemaShape } from './HeroContentDataSchemaShape.ts';

export const HeroContentServerDataSchema: ZodType<HeroContentServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    description: new SchemaShape().description,
  });
