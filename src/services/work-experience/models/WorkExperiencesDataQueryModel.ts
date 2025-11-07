import { DataQueryModel } from '@/services/_models/DataQueryModel.ts';
import { InMemoryWorkExperienceRepositoryFindManyQuery } from '@/services/work-experience/repository-queries-and-mutations/InMemoryWorkExperienceRepositoryFindManyQuery.ts';
import { WorkExperienceServerDataTransformer } from '@/services/work-experience/transformers/WorkExperienceServerDataTransformer.ts';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';
import { type WorkExperiencesDataQueryOptions } from '@/services/work-experience/types/WorkExperiencesDataQueryOptions.ts';
import { WorkExperienceClientDataVerifier } from '@/services/work-experience/verifiers/WorkExperienceClientDataVerifier.ts';
import { WorkExperienceServerDataVerifier } from '@/services/work-experience/verifiers/WorkExperienceServerDataVerifier.ts';

export class WorkExperiencesDataQueryModel extends DataQueryModel<
  WorkExperiencesDataQueryOptions,
  WorkExperienceServerData,
  WorkExperienceClientData
> {
  protected override _repositoryQuery =
    new InMemoryWorkExperienceRepositoryFindManyQuery();
  protected override _serverDataVerifier =
    new WorkExperienceServerDataVerifier();
  protected override _serverDataTransformer =
    new WorkExperienceServerDataTransformer();
  protected override _clientDataVerifier =
    new WorkExperienceClientDataVerifier();
}
