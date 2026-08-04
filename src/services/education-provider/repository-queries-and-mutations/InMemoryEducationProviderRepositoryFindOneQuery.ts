import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryEducationProviderRepository } from '../constants/InMemoryEducationProviderRepository.ts';
import { type EducationProviderDataQueryOptions } from '../types/EducationProviderDataQueryOptions.ts';
import { type EducationProviderServerData } from '../types/EducationProviderServerData.ts';

export class InMemoryEducationProviderRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  EducationProviderDataQueryOptions,
  EducationProviderServerData
> {
  protected override _createErrorMessage(
    options: EducationProviderDataQueryOptions,
  ): string {
    return `Could not find "Education Provider Data" for id: ${options.id}`;
  }

  protected override _retrieveData(
    options: EducationProviderDataQueryOptions,
  ): EducationProviderServerData | null | undefined {
    const { repository } = new InMemoryEducationProviderRepository();
    return repository.find((data) => data.id === options.id);
  }
}
