import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryWorkExperienceRepositoryFindManyQuery } from '../repository-queries-and-mutations/InMemoryWorkExperienceRepositoryFindManyQuery.ts';
import { WorkExperienceServerDataTransformer } from '../transformers/WorkExperienceServerDataTransformer.ts';
import { type WorkExperienceClientData } from '../types/WorkExperienceClientData.ts';
import { type WorkExperienceServerData } from '../types/WorkExperienceServerData.ts';
import { type WorkExperiencesDataQueryOptions } from '../types/WorkExperiencesDataQueryOptions.ts';
import { WorkExperienceClientDataVerifier } from '../verifiers/WorkExperienceClientDataVerifier.ts';
import { WorkExperienceServerDataVerifier } from '../verifiers/WorkExperienceServerDataVerifier.ts';

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
