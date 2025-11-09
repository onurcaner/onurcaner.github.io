import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type ListDataQueryOptions } from '@/services/list/types/ListDataQueryOptions.ts';

export class ListDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<ListDataQueryOptions> {
  protected override _dataName = DataName.List;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: ListDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
