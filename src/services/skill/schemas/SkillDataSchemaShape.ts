import { z } from 'zod';

import { ContentLanguageCodeSchema } from '@/services/_schemas/ContentLanguageCodeSchema.ts';
import { type SchemaShape } from '@/services/_types/SchemaShape.ts';
import { SkillCategory } from '@/services/skill/constants/SkillCategory.ts';
import { SkillName } from '@/services/skill/constants/SkillName.ts';

export const SkillDataSchemaShape = {
  Id: z.uuidv4(),
  ContentLanguageCode: ContentLanguageCodeSchema,

  Name: z.enum([
    SkillName.CSS,
    SkillName.Git,
    SkillName.HTML,
    SkillName.JavaScript,
    SkillName.NextJs,
    SkillName.React,
    SkillName.SASS,
    SkillName.TailwindCSS,
    SkillName.TypeScript,
  ]),
  Label: z.string().max(100),
  AssociatedSkillCategories: z
    .array(
      z.enum([
        SkillCategory.Backend,
        SkillCategory.Frontend,
        SkillCategory.Testing,
      ]),
    )
    .max(10),
} satisfies SchemaShape;
