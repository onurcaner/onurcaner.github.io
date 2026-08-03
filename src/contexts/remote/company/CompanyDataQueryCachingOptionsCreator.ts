import { type CompanyDataQueryOptions } from '@/services/company/types/CompanyDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class CompanyDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<CompanyDataQueryOptions> {
  protected override _dataName = DataName.Company;
  protected override _dataType = DataType.One;

  protected override _createSecondaryKeys(
    options: CompanyDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [options.id];
  }
}
