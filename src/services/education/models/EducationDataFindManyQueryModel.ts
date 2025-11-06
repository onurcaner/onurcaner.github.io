import { DataFindManyQueryModel } from '@/services/_models/DataFindManyQueryModel.ts';
import { InMemoryEducationRepositoryFindManyQuery } from '@/services/education/repository-queries-and-mutations/InMemoryEducationRepositoryFindManyQuery.ts';
import { EducationServerDataTransformer } from '@/services/education/transformer/EducationServerDataTransformer.ts';
import { type EducationClientData } from '@/services/education/types/EducationClientData.ts';
import { type EducationDataFindManyQueryOptions } from '@/services/education/types/EducationDataFindManyQueryOptions.ts';
import { type EducationServerData } from '@/services/education/types/EducationServerData.ts';
import { EducationClientDataVerifier } from '@/services/education/verifiers/EducationClientDataVerifier.ts';
import { EducationServerDataVerifier } from '@/services/education/verifiers/EducationServerDataVerifier.ts';

export class EducationDataFindManyQueryModel extends DataFindManyQueryModel<
  EducationDataFindManyQueryOptions,
  EducationServerData,
  EducationClientData
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
