import { DataFindOneQueryModel } from '@/services/_base/models/DataFindOneQueryModel.ts';
import { InMemoryHeroContentRepositoryFindOneQuery } from '@/services/hero-content/repository-queries-and-mutations/InMemoryHeroContentRepositoryFindOneQuery.ts';
import { HeroContentServerToClientDataTransformer } from '@/services/hero-content/transformers/HeroContentServerToClientDataTransformer.ts';
import { type HeroContentClientData } from '@/services/hero-content/types/HeroContentClientData.ts';
import { type HeroContentDataFindOneQueryOptions } from '@/services/hero-content/types/HeroContentDataFindOneQueryOptions.ts';
import { type HeroContentServerData } from '@/services/hero-content/types/HeroContentServerData.ts';
import { HeroContentClientDataVerifier } from '@/services/hero-content/verifiers/HeroContentClientDataVerifier.ts';
import { HeroContentServerDataVerifier } from '@/services/hero-content/verifiers/HeroContentServerDataVerifier.ts';

export class HeroContentDataFindOneQueryModel extends DataFindOneQueryModel<
  HeroContentDataFindOneQueryOptions,
  HeroContentServerData,
  HeroContentClientData
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryHeroContentRepositoryFindOneQuery(),
      serverDataVerifier: new HeroContentServerDataVerifier(),
      serverToClientDataTransformer:
        new HeroContentServerToClientDataTransformer(),
      clientDataVerifier: new HeroContentClientDataVerifier(),
    });
  }
}
