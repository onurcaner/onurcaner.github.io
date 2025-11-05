import { InMemoryRepositoryQuery } from '@/services/_base/repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryCallToActionContentRepository } from '@/services/call-to-action-content/constants/inMemoryCallToActionContentRepository.ts';
import { type CallToActionContentDataFindOneQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataFindOneQueryOptions.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

export class InMemoryCallToActionContentRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  CallToActionContentDataFindOneQueryOptions,
  CallToActionContentServerData
> {
  protected _errorMessage = 'Could not find "Call to Action Content"';

  protected _retrieveData(
    options: CallToActionContentDataFindOneQueryOptions,
  ): CallToActionContentServerData | null | undefined {
    const result = inMemoryCallToActionContentRepository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
    return result ?? null;
  }
}
