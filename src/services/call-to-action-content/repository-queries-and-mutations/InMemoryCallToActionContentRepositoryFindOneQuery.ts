import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryCallToActionContentRepository } from '../constants/InMemoryCallToActionContentRepository.ts';
import { type CallToActionContentDataQueryOptions } from '../types/CallToActionContentDataQueryOptions.ts';
import { type CallToActionContentServerData } from '../types/CallToActionContentServerData.ts';

export class InMemoryCallToActionContentRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  CallToActionContentDataQueryOptions,
  CallToActionContentServerData
> {
  protected override _createErrorMessage(
    options: CallToActionContentDataQueryOptions,
  ): string {
    return `Could not find "Call to Action Content Data" for content language code: ${options.contentLanguageCode}`;
  }

  protected override _retrieveData(
    options: CallToActionContentDataQueryOptions,
  ): CallToActionContentServerData | null | undefined {
    const { repository } = new InMemoryCallToActionContentRepository();
    return repository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
  }
}
