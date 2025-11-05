import { InMemoryRepositoryQuery } from '@/services/_base/repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemoryHeroContentRepository } from '@/services/hero-content/constants/inMemoryHeroContentRepository.ts';
import { type HeroContentDataFindOneQueryOptions } from '@/services/hero-content/types/HeroContentDataFindOneQueryOptions.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';

export class InMemoryHeroContentRepositoryFindOneQuery extends InMemoryRepositoryQuery<
  HeroContentDataFindOneQueryOptions,
  HeroContentServerData
> {
  protected _errorMessage = 'Could not find "Hero Content"';

  protected _retrieveData(
    options: HeroContentDataFindOneQueryOptions,
  ): HeroContentServerData | null | undefined {
    const result = inMemoryHeroContentRepository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
    return result ?? null;
  }
}
