import { type EducationsDataQueryOptions } from '@/services/education/types/EducationsDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class EducationsDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<EducationsDataQueryOptions> {
  protected override _dataName = DataName.Education;
  protected override _dataType = DataType.Many;

  protected override _createSecondaryKeys(
    options: EducationsDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.contentLanguageCode];
  }
}
