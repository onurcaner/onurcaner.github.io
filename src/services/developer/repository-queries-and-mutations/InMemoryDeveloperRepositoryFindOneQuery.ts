import { InMemoryRepositoryQuery } from '@/services/_base/repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryDeveloperRepository } from '@/services/developer/constants/inMemoryDeveloperRepository.ts';
import { type DeveloperDataFindOneQueryOptions } from '@/services/developer/types/DeveloperDataFindOneQueryOptions.ts';
import { type DeveloperServerData } from '@/services/developer/types/DeveloperServerData.ts';

export class InMemoryDeveloperRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  DeveloperDataFindOneQueryOptions,
  DeveloperServerData
> {
  protected _errorMessage = 'Could not find "Developer"';

  protected _retrieveData(
    options: DeveloperDataFindOneQueryOptions,
  ): DeveloperServerData | null | undefined {
    const result = inMemoryDeveloperRepository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
    return result ?? null;
  }
}
