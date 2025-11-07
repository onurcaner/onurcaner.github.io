import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryDeveloperRepository } from '@/services/developer/constants/inMemoryDeveloperRepository.ts';
import { type DeveloperDataQueryOptions } from '@/services/developer/types/DeveloperDataQueryOptions.ts';
import { type DeveloperServerData } from '@/services/developer/types/DeveloperServerData.ts';

export class InMemoryDeveloperRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  DeveloperDataQueryOptions,
  DeveloperServerData
> {
  protected override _createErrorMessage(
    options: DeveloperDataQueryOptions,
  ): string {
    return `Could not find "Developer Data" for content language code: ${options.contentLanguageCode}`;
  }

  protected override _retrieveData(
    options: DeveloperDataQueryOptions,
  ): DeveloperServerData | null | undefined {
    const result = inMemoryDeveloperRepository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
    return result ?? null;
  }
}
