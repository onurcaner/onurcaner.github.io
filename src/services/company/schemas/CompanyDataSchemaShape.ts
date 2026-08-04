import { z } from 'zod';

import { ContentLanguageCodeSchema } from '../../_schemas/ContentLanguageCodeSchema.ts';
import { LocationDataSchemaShape } from '../../location/schemas/LocationDataSchemaShape.ts';

export class CompanyDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return ContentLanguageCodeSchema;
  }
  public get name() {
    return z.string().max(100);
  }
  public get webPageUrl() {
    return z.url();
  }
  public get locationId() {
    return new LocationDataSchemaShape().id;
  }
}
