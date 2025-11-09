import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type ExternalLinkDataQueryOptions } from '@/services/external-link/types/ExternalLinkDataQueryOptions.ts';

export class ExternalLinkDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<ExternalLinkDataQueryOptions> {
  protected override _dataName = DataName.ExternalLink;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: ExternalLinkDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
