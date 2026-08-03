import { type HeroContentDataQueryOptions } from '@/services/hero-content/types/HeroContentDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class HeroContentDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<HeroContentDataQueryOptions> {
  protected override _dataName = DataName.HeroContent;
  protected override _dataType = DataType.One;

  protected _createSecondaryKeys(
    options: HeroContentDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.contentLanguageCode];
  }
}
