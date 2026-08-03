import { type WorkExperiencesDataQueryOptions } from '@/services/work-experience/types/WorkExperiencesDataQueryOptions.ts';

import { DataQueryCachingOptionsCreator } from '../_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '../_constants/DataName.ts';
import { DataType } from '../_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '../_types/DataCachingSecondaryKeys.ts';

export class WorkExperiencesDataQueryCachingOptionsCreator extends DataQueryCachingOptionsCreator<WorkExperiencesDataQueryOptions> {
  protected override _dataName = DataName.WorkExperience;
  protected override _dataType = DataType.Many;

  protected override _createSecondaryKeys(
    options: WorkExperiencesDataQueryOptions,
  ): DataCachingSecondaryKeys {
    return [
      options.contentLanguageCode,
      ...options.associatedWorkExperienceCategories.toSorted(),
    ];
  }
}
