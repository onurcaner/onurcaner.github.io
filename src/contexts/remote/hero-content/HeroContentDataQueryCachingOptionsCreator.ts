import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type HeroContentDataQueryOptions } from '@/services/hero-content/types/HeroContentDataQueryOptions.ts';

export class HeroContentDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<HeroContentDataQueryOptions> {
  protected override _dataName = DataName.HeroContent;
  protected override _dataType = DataType.One;

  protected _createSecondaryKeys(
    options: HeroContentDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.contentLanguageCode];
  }
}
