import { z } from 'zod';

import { ContentLanguageCodeSchema } from '../../_schemas/ContentLanguageCodeSchema.ts';

export class ListDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return ContentLanguageCodeSchema;
  }
  public get title() {
    return z.string().max(100);
  }
  public get items() {
    return z.array(this.title).max(20);
  }
}
