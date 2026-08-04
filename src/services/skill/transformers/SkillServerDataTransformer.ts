import { DataTransformer } from '../../_transformers/DataTransformer.ts';

import { type SkillClientData } from '../types/SkillClientData.ts';
import { type SkillServerData } from '../types/SkillServerData.ts';

export class SkillServerDataTransformer extends DataTransformer<
  SkillServerData,
  SkillClientData
> {
  protected override async _transformOne(
    data: SkillServerData,
  ): Promise<SkillClientData> {
    return Promise.resolve({
      id: data.id,
      contentLanguageCode: data.content_language_code,
      name: data.name,
      label: data.label,
      associatedSkillCategories: data.associated_skill_categories,
    });
  }
}
