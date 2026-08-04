import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryHeroContentRepositoryFindOneQuery } from '../repository-queries-and-mutations/InMemoryHeroContentRepositoryFindOneQuery.ts';
import { HeroContentServerDataTransformer } from '../transformers/HeroContentServerDataTransformer.ts';
import { type HeroContentClientData } from '../types/HeroContentClientData.ts';
import { type HeroContentDataQueryOptions } from '../types/HeroContentDataQueryOptions.ts';
import { type HeroContentServerData } from '../types/HeroContentServerData.ts';
import { HeroContentClientDataVerifier } from '../verifiers/HeroContentClientDataVerifier.ts';
import { HeroContentServerDataVerifier } from '../verifiers/HeroContentServerDataVerifier.ts';

export class HeroContentDataQueryModel extends DataQueryModel<
  HeroContentDataQueryOptions,
  HeroContentServerData,
  HeroContentClientData,
  QueryMode.One
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryHeroContentRepositoryFindOneQuery(),
      serverDataVerifier: new HeroContentServerDataVerifier(),
      serverDataTransformer: new HeroContentServerDataTransformer(),
      clientDataVerifier: new HeroContentClientDataVerifier(),
    });
  }
}
