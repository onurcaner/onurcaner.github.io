import { z } from 'zod';

import { ContentLanguageCodeSchema } from '../../_schemas/ContentLanguageCodeSchema.ts';

import { SkillCategory } from '../constants/SkillCategory.ts';
import { SkillName } from '../constants/SkillName.ts';

export class SkillDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return ContentLanguageCodeSchema;
  }
  public get name() {
    return z.enum(this._skillNames);
  }
  public get label() {
    return z.string().max(100);
  }
  public get associatedSkillCategories() {
    return z
      .array(z.enum(this._skillCategories))
      .max(this._skillCategories.length);
  }

  private get _skillNames() {
    return [
      SkillName.CSS,
      SkillName.Git,
      SkillName.HTML,
      SkillName.JavaScript,
      SkillName.NextJs,
      SkillName.React,
      SkillName.SASS,
      SkillName.TailwindCSS,
      SkillName.TypeScript,
    ];
  }
  private get _skillCategories() {
    return [
      SkillCategory.Backend,
      SkillCategory.Frontend,
      SkillCategory.Testing,
    ];
  }
}
