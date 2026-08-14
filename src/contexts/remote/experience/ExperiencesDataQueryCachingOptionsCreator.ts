import { type ExperiencesDataQueryOptions } from '@/services/experience/types/ExperiencesDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class ExperiencesDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<ExperiencesDataQueryOptions> {
  protected override _dataName = DataName.Experience;
  protected override _dataType = DataType.Many;

  protected override _createSecondaryKeys(
    options: ExperiencesDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [
      options.contentLanguageCode,
      ...options.associatedExperienceCategories.toSorted(),
    ];
  }
}
