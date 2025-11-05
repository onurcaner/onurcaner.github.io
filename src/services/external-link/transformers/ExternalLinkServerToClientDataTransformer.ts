import { DataTransformer } from '@/services/_base/transformers/DataTransformer.ts';
import { type ExternalLinkClientData } from '@/services/external-link/types/ExternalLinkClientData.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';

export class ExternalLinkServerToClientDataTransformer extends DataTransformer<
  ExternalLinkServerData,
  ExternalLinkClientData
> {
  protected async transformOne(
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
