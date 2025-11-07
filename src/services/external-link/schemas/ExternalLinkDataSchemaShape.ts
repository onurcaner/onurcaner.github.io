import { z } from 'zod';

import { contentLanguageCodeSchema } from '@/services/_schemas/contentLanguageCodeSchema.ts';
import { ExternalLinkName } from '@/services/external-link/constants/ExternalLinkName.ts';

export class ExternalLinkDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return contentLanguageCodeSchema;
  }
  public get name() {
    return z.enum(this._externalLinkNames);
  }
  public get label() {
    return z.string().max(100);
  }
  public get url() {
    return z.url();
  }

  private get _externalLinkNames() {
    return [
      ExternalLinkName.GitHub,
      ExternalLinkName.LinkedIn,
      ExternalLinkName.PersonalPage,
      ExternalLinkName.Other,
    ];
  }
}
