import { type ExternalLinkDataQueryOptions } from '@/services/external-link/types/ExternalLinkDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class ExternalLinkDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<ExternalLinkDataQueryOptions> {
  protected override _dataName = DataName.ExternalLink;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: ExternalLinkDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
