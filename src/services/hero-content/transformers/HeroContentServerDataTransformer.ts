import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type HeroContentClientData } from '@/services/hero-content/types/HeroContentClientData.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';

export class HeroContentServerDataTransformer extends DataTransformer<
  HeroContentServerData,
  HeroContentClientData
> {
  protected override async _transformOne(
    data: HeroContentServerData,
  ): Promise<HeroContentClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      title: data.title,
      description: data.description,
    });
  }
}
