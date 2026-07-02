import { QueryMode } from '@/services/_constants/QueryMode.ts';
import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemorySkillRepositoryFindManyQuery } from '@/services/skill/repository-queries-and-mutations/InMemorySkillRepositoryFindManyQuery.ts';
import { SkillServerDataTransformer } from '@/services/skill/transformers/SkillServerDataTransformer.ts';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';
import { type SkillServerData } from '@/services/skill/types/SkillServerData.ts';
import { type SkillsDataQueryOptions } from '@/services/skill/types/SkillsDataQueryOptions.ts';
import { SkillClientDataVerifier } from '@/services/skill/verifiers/SkillClientDataVerifier.ts';
import { SkillServerDataVerifier } from '@/services/skill/verifiers/SkillServerDataVerifier.ts';

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
