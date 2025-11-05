import { type ZodType, z } from 'zod';

import { HeroContentDataSchemaShape as SchemaShape } from '@/services/hero-content/schemas/HeroContentDataSchemaShape.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';

export const HeroContentServerDataSchema: ZodType<HeroContentServerData> =
  z.object({
    id: SchemaShape.Id,
    content_language_code: SchemaShape.ContentLanguageCode,

    title: SchemaShape.Title,
    description: SchemaShape.Description,
  });
