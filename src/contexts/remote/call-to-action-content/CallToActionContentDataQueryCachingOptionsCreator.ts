import { type CallToActionContentDataQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class CallToActionContentDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<CallToActionContentDataQueryOptions> {
  protected override _dataName = DataName.CallToActionContent;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: CallToActionContentDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.contentLanguageCode];
  }
}
