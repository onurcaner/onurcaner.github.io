import { type ZodType, z } from 'zod';

import { HeroContentDataSchemaShape as SchemaShape } from '@/services/hero-content/schemas/HeroContentDataSchemaShape.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';

export const HeroContentServerDataSchema: ZodType<HeroContentServerData> =
  z.object({
    id: new SchemaShape().id,
    content_language_code: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    description: new SchemaShape().description,
  });
