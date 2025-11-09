import { DataQueryCachingOptionsCreator } from '@/contexts/remote/_base/DataQueryCachingOptionsCreator.ts';
import { DataName } from '@/contexts/remote/_constants/DataName.ts';
import { DataType } from '@/contexts/remote/_constants/DataType.ts';
import { type DataCachingSecondaryKeys } from '@/contexts/remote/_types/DataCachingSecondaryKeys.ts';
import { type WorkExperiencesDataQueryOptions } from '@/services/work-experience/types/WorkExperiencesDataQueryOptions.ts';

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
