import { type ListDataQueryOptions } from '@/services/list/types/ListDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class ListDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<ListDataQueryOptions> {
  protected override _dataName = DataName.List;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: ListDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
