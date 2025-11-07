import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type CallToActionContentDataQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataQueryOptions.ts';

export class CallToActionContentDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<CallToActionContentDataQueryOptions> {
  protected override _dataName = DataName.CallToActionContent;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: CallToActionContentDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.contentLanguageCode];
  }
}
