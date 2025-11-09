import { QueryMode } from '@/services/_constants/QueryMode.ts';
import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryEducationProviderRepositoryFindOneQuery } from '@/services/education-provider/repository-queries-and-mutations/InMemoryEducationProviderRepositoryFindOneQuery.ts';
import { EducationProviderServerDataTransformer } from '@/services/education-provider/transformers/EducationProviderServerDataTransformer.ts';
import { type EducationProviderClientData } from '@/services/education-provider/types/EducationProviderClientData.ts';
import { type EducationProviderDataQueryOptions } from '@/services/education-provider/types/EducationProviderDataQueryOptions.ts';
import { type EducationProviderServerData } from '@/services/education-provider/types/EducationProviderServerData.ts';
import { EducationProviderClientDataVerifier } from '@/services/education-provider/verifiers/EducationProviderClientDataVerifier.ts';
import { EducationProviderServerDataVerifier } from '@/services/education-provider/verifiers/EducationProviderServerDataVerifier.ts';

export class EducationProviderDataQueryModel extends DataQueryModel<
  EducationProviderDataQueryOptions,
  EducationProviderServerData,
  EducationProviderClientData,
  QueryMode.One
> {
  protected override _repositoryQuery =
    new InMemoryEducationProviderRepositoryFindOneQuery();
  protected override _serverDataVerifier =
    new EducationProviderServerDataVerifier();
  protected override _serverDataTransformer =
    new EducationProviderServerDataTransformer();
  protected override _clientDataVerifier =
    new EducationProviderClientDataVerifier();
}
