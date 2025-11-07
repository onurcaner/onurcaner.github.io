import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import type { DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import type { CompanyDataQueryOptions } from '@/services/company/types/CompanyDataQueryOptions.ts';

export class CompanyDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<CompanyDataQueryOptions> {
  protected override _dataName = DataName.Company;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: CompanyDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
