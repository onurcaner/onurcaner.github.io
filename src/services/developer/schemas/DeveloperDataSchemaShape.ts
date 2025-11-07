import { z } from 'zod';

import { contentLanguageCodeSchema } from '@/services/_schemas/contentLanguageCodeSchema.ts';
import { ExternalLinkDataSchemaShape } from '@/services/external-link/schemas/ExternalLinkDataSchemaShape.ts';

export class DeveloperDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return contentLanguageCodeSchema;
  }
  public get name() {
    return z.string().max(20);
  }
  public get jobTitle() {
    return z.string().max(100);
  }
  public get externalLinkIds() {
    return z.array(new ExternalLinkDataSchemaShape().id).max(20);
  }
  public get isOpenToWork() {
    return z.boolean();
  }
}
