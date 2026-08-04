import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryListRepository } from '../constants/InMemoryListRepository.ts';
import { type ListDataQueryOptions } from '../types/ListDataQueryOptions.ts';
import { type ListServerData } from '../types/ListServerData.ts';

export class InMemoryListRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  ListDataQueryOptions,
  ListServerData
> {
  protected override _createErrorMessage(
    options: ListDataQueryOptions,
  ): string {
    return `Could not find "List Data" for id: ${options.id}`;
  }

  protected override _retrieveData(
    options: ListDataQueryOptions,
  ): ListServerData | null | undefined {
    const { repository } = new InMemoryListRepository();

    return repository.find((data) => data.id === options.id);
  }
}
