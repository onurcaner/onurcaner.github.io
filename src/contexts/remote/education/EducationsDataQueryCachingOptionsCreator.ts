import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type EducationsDataQueryOptions } from '@/services/education/types/EducationsDataQueryOptions.ts';

export class EducationsDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<EducationsDataQueryOptions> {
  protected override _dataName = DataName.Education;
  protected override _dataType = DataType.Many;

  protected override _createSecondaryKeys(
    options: EducationsDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.contentLanguageCode];
  }
}
