import { QueryMode } from '@/services/_constants/QueryMode.ts';
import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryEducationRepositoryFindManyQuery } from '@/services/education/repository-queries-and-mutations/InMemoryEducationRepositoryFindManyQuery.ts';
import { EducationServerDataTransformer } from '@/services/education/transformer/EducationServerDataTransformer.ts';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';
import { type EducationsDataQueryOptions } from '@/services/education/types/EducationsDataQueryOptions.ts';
import { EducationClientDataVerifier } from '@/services/education/verifiers/EducationClientDataVerifier.ts';
import { EducationServerDataVerifier } from '@/services/education/verifiers/EducationServerDataVerifier.ts';

export class EducationsDataQueryModel extends DataQueryModel<
  EducationsDataQueryOptions,
  EducationServerData,
  EducationClientData,
  QueryMode.Many
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryEducationRepositoryFindManyQuery(),
      serverDataVerifier: new EducationServerDataVerifier(),
      serverDataTransformer: new EducationServerDataTransformer(),
      clientDataVerifier: new EducationClientDataVerifier(),
    });
  }
}
