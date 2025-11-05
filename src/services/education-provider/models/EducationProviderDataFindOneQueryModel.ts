import { DataFindOneQueryModel } from '@/services/_base/models/DataFindOneQueryModel.ts';
import { InMemoryEducationProviderRepositoryFindOneQuery } from '@/services/education-provider/repository-queries-and-mutations/InMemoryEducationProviderRepositoryFindOneQuery.ts';
import { EducationProviderServerToClientDataTransformer } from '@/services/education-provider/transformers/EducationProviderServerToClientDataTransformer.ts';
import { type EducationProviderClientData } from '@/services/education-provider/types/EducationProviderClientData.ts';
import { type EducationProviderDataFindOneQueryOptions } from '@/services/education-provider/types/EducationProviderDataFindOneQueryOptions.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';
import { EducationProviderClientDataVerifier } from '@/services/education-provider/verifiers/EducationProviderClientDataVerifier.ts';
import { EducationProviderServerDataVerifier } from '@/services/education-provider/verifiers/EducationProviderServerDataVerifier.ts';

export class EducationProviderDataFindOneQueryModel extends DataFindOneQueryModel<
  EducationProviderDataFindOneQueryOptions,
  EducationProviderServerData,
  EducationProviderClientData
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryEducationProviderRepositoryFindOneQuery(),
      serverDataVerifier: new EducationProviderServerDataVerifier(),
      serverToClientDataTransformer:
        new EducationProviderServerToClientDataTransformer(),
      clientDataVerifier: new EducationProviderClientDataVerifier(),
    });
  }
}
