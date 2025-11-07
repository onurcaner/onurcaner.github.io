import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryListRepository } from '@/services/list/constants/inMemoryListRepository.ts';
import { type ListDataQueryOptions } from '@/services/list/types/ListDataQueryOptions.ts';
import { type ListServerData } from '@/services/list/types/ListServerData.ts';

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
    const result = inMemoryListRepository.find(
      (data) => data.id === options.id,
    );

    return result ?? null;
  }
}
