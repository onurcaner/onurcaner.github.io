import { z } from 'zod';

import { contentLanguageCodeSchema } from '@/services/_schemas/contentLanguageCodeSchema.ts';

export class LocationDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return contentLanguageCodeSchema;
  }
  private get _name() {
    return z.string().max(100);
  }
  public get countryName() {
    return this._name;
  }
  public get countryCode() {
    return z.string().length(2);
  }
  public get cityName() {
    return this._name;
  }
}
