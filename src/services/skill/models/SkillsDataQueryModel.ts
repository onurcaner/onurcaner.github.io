import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemorySkillRepositoryFindManyQuery } from '../repository-queries-and-mutations/InMemorySkillRepositoryFindManyQuery.ts';
import { SkillServerDataTransformer } from '../transformers/SkillServerDataTransformer.ts';
import { type SkillClientData } from '../types/SkillClientData.ts';
import { type SkillServerData } from '../types/SkillServerData.ts';
import { type SkillsDataQueryOptions } from '../types/SkillsDataQueryOptions.ts';
import { SkillClientDataVerifier } from '../verifiers/SkillClientDataVerifier.ts';
import { SkillServerDataVerifier } from '../verifiers/SkillServerDataVerifier.ts';

export class SkillsDataQueryModel extends DataQueryModel<
  SkillsDataQueryOptions,
  SkillServerData,
  SkillClientData,
  QueryMode.Many
> {
  public constructor() {
    super({
      repositoryQuery: new InMemorySkillRepositoryFindManyQuery(),
      serverDataVerifier: new SkillServerDataVerifier(),
      serverDataTransformer: new SkillServerDataTransformer(),
      clientDataVerifier: new SkillClientDataVerifier(),
    });
  }
}
