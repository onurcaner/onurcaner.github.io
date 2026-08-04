import { DataTransformer } from '../../_transformers/DataTransformer.ts';

import { type ExternalLinkClientData } from '../types/ExternalLinkClientData.ts';
import { type ExternalLinkServerData } from '../types/ExternalLinkServerData.ts';

export class ExternalLinkServerDataTransformer extends DataTransformer<
  ExternalLinkServerData,
  ExternalLinkClientData
> {
  protected override async _transformOne(
    data: ExternalLinkServerData,
  ): Promise<ExternalLinkClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      name: data.name,
      label: data.label,
      url: data.url,
    });
  }
}
