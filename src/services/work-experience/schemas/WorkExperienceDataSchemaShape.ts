import { z } from 'zod';

import { contentLanguageCodeSchema } from '@/services/_schemas/contentLanguageCodeSchema.ts';
import { CompanyDataSchemaShape } from '@/services/company/schemas/CompanyDataSchemaShape.ts';
import { ListDataSchemaShape } from '@/services/list/schemas/ListDataSchemaShape.ts';
import { WorkExperienceCategory } from '@/services/work-experience/constants/WorkExperienceCategory.ts';

export class WorkExperienceDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return contentLanguageCodeSchema;
  }
  public get title() {
    return z.string().max(100);
  }
  public get associatedWorkExperienceCategories() {
    return z
      .array(z.enum(this._workExperienceCategories))
      .max(this._workExperienceCategories.length);
  }
  public get companyId() {
    return new CompanyDataSchemaShape().id;
  }
  public get dateObject() {
    return z.date();
  }
  public get dateIso() {
    return z.iso.date();
  }
  public get descriptionListIds() {
    return z.array(new ListDataSchemaShape().id).max(20);
  }

  private get _workExperienceCategories() {
    return [
      WorkExperienceCategory.BackendDevelopment,
      WorkExperienceCategory.FrontendDevelopment,
      WorkExperienceCategory.SoftwareDevelopment,
    ];
  }
}
