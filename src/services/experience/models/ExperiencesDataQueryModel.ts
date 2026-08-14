import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryExperienceRepositoryFindManyQuery } from '../repository-queries-and-mutations/InMemoryExperienceRepositoryFindManyQuery.ts';
import { ExperienceServerDataTransformer } from '../transformers/ExperienceServerDataTransformer.ts';
import { type ExperienceClientData } from '../types/ExperienceClientData.ts';
import { type ExperienceServerData } from '../types/ExperienceServerData.ts';
import { type ExperiencesDataQueryOptions } from '../types/ExperiencesDataQueryOptions.ts';
import { ExperienceClientDataVerifier } from '../verifiers/ExperienceClientDataVerifier.ts';
import { ExperienceServerDataVerifier } from '../verifiers/ExperienceServerDataVerifier.ts';

export class ExperiencesDataQueryModel extends DataQueryModel<
  ExperiencesDataQueryOptions,
  ExperienceServerData,
  ExperienceClientData,
  QueryMode.Many
> {
  public constructor() {
    super({
      repositoryQuery: new InMemoryExperienceRepositoryFindManyQuery(),
      serverDataVerifier: new ExperienceServerDataVerifier(),
      serverDataTransformer: new ExperienceServerDataTransformer(),
      clientDataVerifier: new ExperienceClientDataVerifier(),
    });
  }
}
