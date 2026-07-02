import { QueryMode } from '@/services/_constants/QueryMode.ts';
import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type RepositoryQuery } from '@/services/_types/RepositoryQuery.ts';
import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';

export class DataQueryModel<
  TQueryOptions,
  TServerData,
  TClientData,
  TQueryMode extends QueryMode,
> {
  private _repositoryQuery: TQueryMode extends QueryMode.Many
    ? RepositoryQuery<TQueryOptions, TServerData[]>
    : RepositoryQuery<TQueryOptions, TServerData>;
  private _serverDataVerifier: DataVerifier<TServerData>;
  private _serverDataTransformer: DataTransformer<TServerData, TClientData>;
  private _clientDataVerifier: DataVerifier<TClientData>;

  public constructor({
    repositoryQuery,
    serverDataVerifier,
    serverDataTransformer,
    clientDataVerifier,
  }: {
    repositoryQuery: TQueryMode extends QueryMode.Many
      ? RepositoryQuery<TQueryOptions, TServerData[]>
      : RepositoryQuery<TQueryOptions, TServerData>;
    serverDataVerifier: DataVerifier<TServerData>;
    serverDataTransformer: DataTransformer<TServerData, TClientData>;
    clientDataVerifier: DataVerifier<TClientData>;
  }) {
    this._repositoryQuery = repositoryQuery;
    this._serverDataVerifier = serverDataVerifier;
    this._serverDataTransformer = serverDataTransformer;
    this._clientDataVerifier = clientDataVerifier;
  }

  public async query(
    queryOptions: TQueryOptions,
  ): Promise<TQueryMode extends QueryMode.Many ? TClientData[] : TClientData> {
    const serverData = await this._repositoryQuery.query(queryOptions);
    const verifiedServerData = Array.isArray(serverData)
      ? await this._serverDataVerifier.verifyMany(serverData)
      : await this._serverDataVerifier.verifyOne(serverData);
    const clientData = Array.isArray(verifiedServerData)
      ? await this._serverDataTransformer.transformMany(verifiedServerData)
      : await this._serverDataTransformer.transformOne(verifiedServerData);
    const verifiedClientData = Array.isArray(clientData)
      ? await this._clientDataVerifier.verifyMany(clientData)
      : await this._clientDataVerifier.verifyOne(clientData);
    return verifiedClientData as TQueryMode extends QueryMode.Many
      ? TClientData[]
      : TClientData;
  }
}
