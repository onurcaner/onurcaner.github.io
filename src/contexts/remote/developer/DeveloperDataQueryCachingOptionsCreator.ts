import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type DeveloperDataQueryOptions } from '@/services/developer/types/DeveloperDataQueryOptions.ts';

export class DeveloperDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<DeveloperDataQueryOptions> {
  protected override _dataName = DataName.Developer;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: DeveloperDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.contentLanguageCode];
  }
}
