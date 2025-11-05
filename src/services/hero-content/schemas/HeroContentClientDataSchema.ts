import { type ZodType, z } from 'zod';

import { HeroContentDataSchemaShape as SchemaShape } from '@/services/hero-content/schemas/HeroContentDataSchemaShape.ts';
import { type HeroContentClientData } from '@/services/hero-content/types/HeroContentClientData.ts';

export const HeroContentClientDataSchema: ZodType<HeroContentClientData> =
  z.object({
    id: SchemaShape.Id,
    contentLanguageCode: SchemaShape.ContentLanguageCode,

    title: SchemaShape.Title,
    description: SchemaShape.Description,
  });
