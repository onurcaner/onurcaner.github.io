import { type RepositoryQuery } from '@/services/_base/repository-queries-and-mutations/RepositoryQuery.ts';
import { DataTransformer } from '@/services/_base/transformers/DataTransformer.ts';
import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';

export class DataFindOneQueryModel<TQueryOptions, TServerData, TClientData> {
  private _repositoryQuery: RepositoryQuery<TQueryOptions, TServerData>;
  private _serverDataVerifier: DataVerifier<TServerData>;
  private _serverToClientDataTransformer: DataTransformer<
    TServerData,
    TClientData
  >;
  private _clientDataVerifier: DataVerifier<TClientData>;
  constructor({
    repositoryQuery,
    serverDataVerifier,
    serverToClientDataTransformer,
    clientDataVerifier,
  }: {
    repositoryQuery: RepositoryQuery<TQueryOptions, TServerData>;
    serverDataVerifier: DataVerifier<TServerData>;
    serverToClientDataTransformer: DataTransformer<TServerData, TClientData>;
    clientDataVerifier: DataVerifier<TClientData>;
  }) {
    this._repositoryQuery = repositoryQuery;
    this._serverDataVerifier = serverDataVerifier;
    this._serverToClientDataTransformer = serverToClientDataTransformer;
    this._clientDataVerifier = clientDataVerifier;
  }

  public async query(queryOptions: TQueryOptions): Promise<TClientData> {
    const serverData = await this._repositoryQuery.query(queryOptions);
    const verifiedServerData =
      await this._serverDataVerifier.verify(serverData);
    const clientData =
      await this._serverToClientDataTransformer.transform(verifiedServerData);
    const verifiedClientData =
      await this._clientDataVerifier.verify(clientData);
    return verifiedClientData;
  }
}
