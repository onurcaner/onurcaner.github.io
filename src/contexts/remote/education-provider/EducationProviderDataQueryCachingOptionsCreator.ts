import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type EducationProviderDataQueryOptions } from '@/services/education-provider/types/EducationProviderDataQueryOptions.ts';

export class EducationProviderDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<EducationProviderDataQueryOptions> {
  protected override _dataName = DataName.EducationProvider;
  protected override _dataType = DataType.Many;

  protected override _createSecondaryKeys(
    options: EducationProviderDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
