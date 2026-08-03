import { type DeveloperDataQueryOptions } from '@/services/developer/types/DeveloperDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class DeveloperDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<DeveloperDataQueryOptions> {
  protected override _dataName = DataName.Developer;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: DeveloperDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.contentLanguageCode];
  }
}
