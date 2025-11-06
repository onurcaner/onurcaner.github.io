import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type DeveloperClientData } from '@/services/developer/types/DeveloperClientData.ts';
import { type DeveloperServerData } from '@/services/developer/types/DeveloperServerData.ts';

export class DeveloperServerDataTransformer extends DataTransformer<
  DeveloperServerData,
  DeveloperClientData
> {
  protected override async _transformOne(
    data: DeveloperServerData,
  ): Promise<DeveloperClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      name: data.name,
      jobTitle: data.job_title,
      externalLinkIds: data.external_link_ids,
      isOpenToWork: data.is_open_to_work,
    });
  }
}
