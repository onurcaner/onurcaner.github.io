import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type RepositoryQuery } from '@/services/_types/RepositoryQuery.ts';
import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';

export class DataFindManyQueryModel<TQueryOptions, TServerData, TClientData> {
  private _repositoryQuery: RepositoryQuery<TQueryOptions, TServerData[]>;
  private _serverDataVerifier: DataVerifier<TServerData>;
  private _serverDataTransformer: DataTransformer<TServerData, TClientData>;
  private _clientDataVerifier: DataVerifier<TClientData>;
  constructor({
    repositoryQuery,
    serverDataVerifier,
    serverDataTransformer,
    clientDataVerifier,
  }: {
    repositoryQuery: RepositoryQuery<TQueryOptions, TServerData[]>;
    serverDataVerifier: DataVerifier<TServerData>;
    serverDataTransformer: DataTransformer<TServerData, TClientData>;
    clientDataVerifier: DataVerifier<TClientData>;
  }) {
    this._repositoryQuery = repositoryQuery;
    this._serverDataVerifier = serverDataVerifier;
    this._serverDataTransformer = serverDataTransformer;
    this._clientDataVerifier = clientDataVerifier;
  }

  public async query(queryOptions: TQueryOptions): Promise<TClientData[]> {
    const serverData = await this._repositoryQuery.query(queryOptions);
    const verifiedServerData =
      await this._serverDataVerifier.verify(serverData);
    const clientData =
      await this._serverDataTransformer.transform(verifiedServerData);
    const verifiedClientData =
      await this._clientDataVerifier.verify(clientData);
    return verifiedClientData;
  }
}
