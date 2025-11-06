import { DataFindManyQueryModel } from '@/services/_models/DataFindManyQueryModel.ts';
import { InMemorySkillRepositoryFindManyQuery } from '@/services/skill/repository-queries-and-mutations/InMemorySkillRepositoryFindManyQuery.ts';
import { SkillServerDataTransformer } from '@/services/skill/transformers/SkillServerDataTransformer.ts';
import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';
import { type SkillDataFindManyQueryOptions } from '@/services/skill/types/SkillDataFindManyQueryOptions.ts';
import { type SkillServerData } from '@/services/skill/types/SkillServerData.ts';
import { SkillClientDataVerifier } from '@/services/skill/verifiers/SkillClientDataVerifier.ts';
import { SkillServerDataVerifier } from '@/services/skill/verifiers/SkillServerDataVerifier.ts';

export class SkillDataFindManyQueryModel extends DataFindManyQueryModel<
  SkillDataFindManyQueryOptions,
  SkillServerData,
  SkillClientData
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
