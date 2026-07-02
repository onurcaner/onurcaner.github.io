import { QueryMode } from '@/services/_constants/QueryMode.ts';
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
  WorkExperienceClientData,
  QueryMode.Many
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryWorkExperienceRepositoryFindManyQuery(),
      serverDataVerifier: new WorkExperienceServerDataVerifier(),
      serverDataTransformer: new WorkExperienceServerDataTransformer(),
      clientDataVerifier: new WorkExperienceClientDataVerifier(),
    });
  }
}
