/* eslint-disable @typescript-eslint/no-unnecessary-type-parameters */
import { QueryMode } from '@/services/_constants/QueryMode.ts';
import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type RepositoryQuery } from '@/services/_types/RepositoryQuery.ts';
import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';

export abstract class DataQueryModel<
  TQueryOptions,
  TServerData,
  TClientData,
  TQueryMode extends QueryMode,
> {
  protected abstract _repositoryQuery: TQueryMode extends QueryMode.Many
    ? RepositoryQuery<TQueryOptions, TServerData[]>
    : RepositoryQuery<TQueryOptions, TServerData>;
  protected abstract _serverDataVerifier: DataVerifier<TServerData>;
  protected abstract _serverDataTransformer: DataTransformer<
    TServerData,
    TClientData
  >;
  protected abstract _clientDataVerifier: DataVerifier<TClientData>;

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
