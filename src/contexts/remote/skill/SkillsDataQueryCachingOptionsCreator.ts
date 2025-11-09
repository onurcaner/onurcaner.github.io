import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type SkillsDataQueryOptions } from '@/services/skill/types/SkillsDataQueryOptions.ts';

export class SkillsDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<SkillsDataQueryOptions> {
  protected override _dataName = DataName.Skill;
  protected override _dataType = DataType.Many;

  protected override _createSecondaryKeys(
    options: SkillsDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [
      options.contentLanguageCode,
      ...options.associatedSkillCategories.toSorted(),
    ];
  }
}
