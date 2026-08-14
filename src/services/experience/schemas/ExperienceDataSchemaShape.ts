import { z } from 'zod';

import { ContentLanguageCodeSchema } from '../../_schemas/ContentLanguageCodeSchema.ts';
import { CompanyDataSchemaShape } from '../../company/schemas/CompanyDataSchemaShape.ts';
import { ListDataSchemaShape } from '../../list/schemas/ListDataSchemaShape.ts';

import { ExperienceCategory } from '../constants/ExperienceCategory.ts';

export class ExperienceDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return ContentLanguageCodeSchema;
  }
  public get title() {
    return z.string().max(100);
  }
  public get associatedExperienceCategories() {
    return z
      .array(z.enum(this._experienceCategories))
      .max(this._experienceCategories.length);
  }
  public get companyId() {
    return new CompanyDataSchemaShape().id;
  }
  public get dateObject() {
    return z.date();
  }
  public get dateIso() {
    return z.iso.datetime();
  }
  public get level() {
    return z.string().max(100);
  }
  public get descriptionListIds() {
    return z.array(new ListDataSchemaShape().id).max(20);
  }

  private get _experienceCategories() {
    return [
      ExperienceCategory.BackendDevelopment,
      ExperienceCategory.FrontendDevelopment,
      ExperienceCategory.SoftwareDevelopment,
    ];
  }
}
