import { type SkillsDataQueryOptions } from '@/services/skill/types/SkillsDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

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
