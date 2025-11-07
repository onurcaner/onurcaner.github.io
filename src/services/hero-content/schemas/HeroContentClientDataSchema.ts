import { type ZodType, z } from 'zod';

import { HeroContentDataSchemaShape as SchemaShape } from '@/services/hero-content/schemas/HeroContentDataSchemaShape.ts';
import { type HeroContentClientData } from '@/services/hero-content/types/HeroContentClientData.ts';

export const HeroContentClientDataSchema: ZodType<HeroContentClientData> =
  z.object({
    id: new SchemaShape().id,
    contentLanguageCode: new SchemaShape().contentLanguageCode,

    title: new SchemaShape().title,
    description: new SchemaShape().description,
  });
