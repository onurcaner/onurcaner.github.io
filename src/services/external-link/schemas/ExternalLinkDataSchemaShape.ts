import { z } from 'zod';

import { ContentLanguageCodeSchema } from '../../_schemas/ContentLanguageCodeSchema.ts';

import { ExternalLinkName } from '../constants/ExternalLinkName.ts';

export class ExternalLinkDataSchemaShape {
  public get id() {
    return z.uuidv4();
  }
  public get contentLanguageCode() {
    return ContentLanguageCodeSchema;
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
