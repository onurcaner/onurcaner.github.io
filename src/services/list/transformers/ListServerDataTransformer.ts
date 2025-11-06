import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';

export class ListServerDataTransformer extends DataTransformer<
  ListServerData,
  ListClientData
> {
  protected override async _transformOne(
    data: ListServerData,
  ): Promise<ListClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      title: data.title,
      items: data.items,
    });
  }
}
