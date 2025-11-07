import { z } from 'zod';

import { contentLanguageCodeSchema } from '@/services/_schemas/contentLanguageCodeSchema.ts';
import { LocationDataSchemaShape } from '@/services/location/schemas/LocationDataSchemaShape.ts';

export class EducationProviderDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return contentLanguageCodeSchema;
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
