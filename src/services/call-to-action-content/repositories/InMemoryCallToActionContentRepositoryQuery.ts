import { InMemoryRepositoryQuery } from '@/services/_base/repositories/InMemoryRepositoryQuery.ts';
import { inMemoryCallToActionContentRepository } from '@/services/call-to-action-content/constants/inMemoryCallToActionContentRepository.ts';
import { type CallToActionContentDataQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataQueryOptions.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export class InMemoryCallToActionContentRepositoryQuery extends InMemoryRepositoryQuery<
  CallToActionContentDataQueryOptions,
  CallToActionContentServerData
> {
  protected _errorMessage = 'Could not find "Call to Action Content"';

  protected _retrieveData(
    options: CallToActionContentDataQueryOptions,
  ): CallToActionContentServerData | null | undefined {
    const foundData = inMemoryCallToActionContentRepository
      .slice()
      .find(
        (data) => data.content_language_code === options.contentLanguageCode,
      );
    return foundData;
  }
}
