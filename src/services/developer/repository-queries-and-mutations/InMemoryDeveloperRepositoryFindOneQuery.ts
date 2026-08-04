import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryDeveloperRepository } from '../constants/InMemoryDeveloperRepository.ts';
import { type DeveloperDataQueryOptions } from '../types/DeveloperDataQueryOptions.ts';
import { type DeveloperServerData } from '../types/DeveloperServerData.ts';

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
    const { repository } = new InMemoryDeveloperRepository();

    return repository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
  }
}
