import { z } from 'zod';

import { ContentLanguageCodeSchema } from '../../_schemas/ContentLanguageCodeSchema.ts';
import { EducationProviderDataSchemaShape } from '../../education-provider/schemas/EducationProviderDataSchemaShape.ts';
import { ListDataSchemaShape } from '../../list/schemas/ListDataSchemaShape.ts';

export class EducationDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return ContentLanguageCodeSchema;
  }
  public get title() {
    return z.string().max(100);
  }
  public get educationProviderId() {
    return new EducationProviderDataSchemaShape().id;
  }
  public get dateObject() {
    return z.date();
  }
  public get dateIso() {
    return z.iso.datetime();
  }
  public get gradeType() {
    return z.string().max(20);
  }
  public get gradeValue() {
    return z.string().max(20);
  }
  public get descriptionListIds() {
    return z.array(new ListDataSchemaShape().id).max(20);
  }
}
