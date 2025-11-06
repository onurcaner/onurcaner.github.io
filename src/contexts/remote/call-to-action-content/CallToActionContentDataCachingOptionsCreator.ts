import { BaseDataQueryCachingOptionsCreator } from '@/contexts/remote/_base/BaseDataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type CallToActionContentDataFindOneQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataFindOneQueryOptions.ts';

export class CallToActionContentDataCachingOptionsCreator extends BaseDataQueryCachingOptionsCreator<CallToActionContentDataFindOneQueryOptions> {
  public constructor() {
    super({
      dataName: DataName.CallToActionContent,
      dataType: DataType.One,
      createSecondaryKeys: (options) =>
        [options.contentLanguageCode].toSorted(),
    });
  }
}
