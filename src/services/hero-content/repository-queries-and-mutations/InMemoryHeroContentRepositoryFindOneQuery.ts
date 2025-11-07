import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryHeroContentRepository } from '@/services/hero-content/constants/inMemoryHeroContentRepository.ts';
import { type HeroContentDataQueryOptions } from '@/services/hero-content/types/HeroContentDataQueryOptions.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';

export class InMemoryHeroContentRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  HeroContentDataQueryOptions,
  HeroContentServerData
> {
  protected override _createErrorMessage(
    options: HeroContentDataQueryOptions,
  ): string {
    return `Could not find "Hero Content Data" for content language code: ${options.contentLanguageCode}`;
  }
  protected override _retrieveData(
    options: HeroContentDataQueryOptions,
  ): HeroContentServerData | null | undefined {
    const result = inMemoryHeroContentRepository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
    return result ?? null;
  }
}
