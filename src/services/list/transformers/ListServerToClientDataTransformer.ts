import { DataTransformer } from '@/services/_base/transformers/DataTransformer.ts';
import { type ListClientData } from '@/services/list/types/ListClientData.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';

export class ListServerToClientDataTransformer extends DataTransformer<
  ListServerData,
  ListClientData
> {
  protected async transformOne(data: ListServerData): Promise<ListClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      title: data.title,
      items: data.items,
    });
  }
}
