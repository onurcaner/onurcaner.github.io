import { DataFindManyQueryModel } from '@/services/_models/DataFindManyQueryModel.ts';
import { InMemoryWorkExperienceRepositoryFindManyQuery } from '@/services/work-experience/repository-queries-and-mutations/InMemoryWorkExperienceRepositoryFindManyQuery.ts';
import { WorkExperienceServerDataTransformer } from '@/services/work-experience/transformers/WorkExperienceServerDataTransformer.ts';
import { type WorkExperienceClientData } from '@/services/work-experience/types/WorkExperienceClientData.ts';
import { type WorkExperienceDataFindManyQueryOptions } from '@/services/work-experience/types/WorkExperienceDataFindManyQueryOptions.ts';
import { type WorkExperienceServerData } from '@/services/work-experience/types/WorkExperienceServerData.ts';
import { WorkExperienceClientDataVerifier } from '@/services/work-experience/verifiers/WorkExperienceClientDataVerifier.ts';
import { WorkExperienceServerDataVerifier } from '@/services/work-experience/verifiers/WorkExperienceServerDataVerifier.ts';

export class WorkExperienceDataFindManyQueryModel extends DataFindManyQueryModel<
  WorkExperienceDataFindManyQueryOptions,
  WorkExperienceServerData,
  WorkExperienceClientData
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
