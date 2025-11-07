import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryCallToActionContentRepository } from '@/services/call-to-action-content/constants/inMemoryCallToActionContentRepository.ts';
import { type CallToActionContentDataQueryOptions } from '@/services/call-to-action-content/types/CallToActionContentDataQueryOptions.ts';
import { type CallToActionContentServerData } from '@/services/call-to-action-content/types/CallToActionContentServerData.ts';

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
    const result = inMemoryCallToActionContentRepository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
    return result ?? null;
  }
}
