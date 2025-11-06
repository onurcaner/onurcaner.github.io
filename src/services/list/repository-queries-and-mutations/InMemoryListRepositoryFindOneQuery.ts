import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryListRepository } from '@/services/list/constants/inMemoryListRepository.ts';
import { type ListDataFindOneQueryOptions } from '@/services/list/types/ListDataFindOneQueryOptions.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';

export class InMemoryListRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  ListDataFindOneQueryOptions,
  ListServerData
> {
  protected override _errorMessage = 'Could not find "List"';

  protected override _retrieveData(
    options: ListDataFindOneQueryOptions,
  ): ListServerData | null | undefined {
    const result = inMemoryListRepository.find(
      (data) => data.id === options.id,
    );

    return result ?? null;
  }
}
