import { InMemoryRepositoryQuery } from '../../_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';

import { InMemoryHeroContentRepository } from '../constants/InMemoryHeroContentRepository.ts';
import { type HeroContentDataQueryOptions } from '../types/HeroContentDataQueryOptions.ts';
import { type HeroContentServerData } from '../types/HeroContentServerData.ts';

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
    const { repository } = new InMemoryHeroContentRepository();

    return repository.find(
      (data) => data.content_language_code === options.contentLanguageCode,
    );
  }
}
