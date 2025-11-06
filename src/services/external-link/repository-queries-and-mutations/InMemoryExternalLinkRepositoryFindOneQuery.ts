import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryExternalLinkRepository } from '@/services/external-link/constants/inMemoryExternalLinkRepository.ts';
import { type ExternalLinkDataQueryOptions } from '@/services/external-link/types/ExternalLinkDataQueryOptions.ts';
import { type ExternalLinkServerData } from '@/services/external-link/types/ExternalLinkServerData.ts';

export class InMemoryExternalLinkRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  ExternalLinkDataQueryOptions,
  ExternalLinkServerData
> {
  protected override _errorMessage = 'Could not find "External Link"';

  protected override _retrieveData(
    options: ExternalLinkDataQueryOptions,
  ): ExternalLinkServerData | null | undefined {
    const result = inMemoryExternalLinkRepository.find(
      (data) => data.id === options.id,
    );
    return result ?? null;
  }
}
