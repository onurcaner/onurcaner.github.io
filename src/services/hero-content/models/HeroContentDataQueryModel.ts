import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryHeroContentRepositoryFindOneQuery } from '@/services/hero-content/repository-queries-and-mutations/InMemoryHeroContentRepositoryFindOneQuery.ts';
import { HeroContentServerDataTransformer } from '@/services/hero-content/transformers/HeroContentServerDataTransformer.ts';
import { type HeroContentClientData } from '@/services/hero-content/types/HeroContentClientData.ts';
import { type HeroContentDataQueryOptions } from '@/services/hero-content/types/HeroContentDataQueryOptions.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';
import { HeroContentClientDataVerifier } from '@/services/hero-content/verifiers/HeroContentClientDataVerifier.ts';
import { HeroContentServerDataVerifier } from '@/services/hero-content/verifiers/HeroContentServerDataVerifier.ts';

export class HeroContentDataQueryModel extends DataQueryModel<
  HeroContentDataQueryOptions,
  HeroContentServerData,
  HeroContentClientData
> {
  protected override _repositoryQuery =
    new InMemoryHeroContentRepositoryFindOneQuery();
  protected override _serverDataVerifier = new HeroContentServerDataVerifier();
  protected override _serverDataTransformer =
    new HeroContentServerDataTransformer();
  protected override _clientDataVerifier = new HeroContentClientDataVerifier();
}
