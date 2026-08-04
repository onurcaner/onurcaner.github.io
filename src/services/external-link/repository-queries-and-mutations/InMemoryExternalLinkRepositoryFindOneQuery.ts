import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryExternalLinkRepository } from '../constants/InMemoryExternalLinkRepository.ts';
import { type ExternalLinkDataQueryOptions } from '../types/ExternalLinkDataQueryOptions.ts';
import { type ExternalLinkServerData } from '../types/ExternalLinkServerData.ts';

export class InMemoryExternalLinkRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  ExternalLinkDataQueryOptions,
  ExternalLinkServerData
> {
  protected override _createErrorMessage(
    options: ExternalLinkDataQueryOptions,
  ): string {
    return `Could not find "External Link Data" for id: ${options.id}`;
  }

  protected override _retrieveData(
    options: ExternalLinkDataQueryOptions,
  ): ExternalLinkServerData | null | undefined {
    const { repository } = new InMemoryExternalLinkRepository();
    return repository.find((data) => data.id === options.id);
  }
}
