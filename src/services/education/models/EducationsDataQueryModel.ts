import { QueryMode } from '../../_constants/QueryMode.ts';
import { DataQueryModel } from '../../_models/DataQueryModel.ts';

import { InMemoryEducationRepositoryFindManyQuery } from '../repository-queries-and-mutations/InMemoryEducationRepositoryFindManyQuery.ts';
import { EducationServerDataTransformer } from '../transformer/EducationServerDataTransformer.ts';
import { type EducationClientData } from '../types/EducationClientData.ts';
import { type EducationServerData } from '../types/EducationServerData.ts';
import { type EducationsDataQueryOptions } from '../types/EducationsDataQueryOptions.ts';
import { EducationClientDataVerifier } from '../verifiers/EducationClientDataVerifier.ts';
import { EducationServerDataVerifier } from '../verifiers/EducationServerDataVerifier.ts';

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
