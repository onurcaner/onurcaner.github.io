import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type RepositoryQuery } from '@/services/_types/RepositoryQuery.ts';
import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';

export abstract class DataQueryModel<TQueryOptions, TServerData, TClientData> {
  protected abstract _repositoryQuery:
    | RepositoryQuery<TQueryOptions, TServerData>
    | RepositoryQuery<TQueryOptions, TServerData[]>;
  protected abstract _serverDataVerifier: DataVerifier<TServerData>;
  protected abstract _serverDataTransformer: DataTransformer<
    TServerData,
    TClientData
  >;
  protected abstract _clientDataVerifier: DataVerifier<TClientData>;

  public async query(queryOptions: TQueryOptions): Promise<TClientData>;
  public async query(queryOptions: TQueryOptions): Promise<TClientData[]>;
  public async query(
    queryOptions: TQueryOptions,
  ): Promise<TClientData | TClientData[]> {
    const serverData = await this._repositoryQuery.query(queryOptions);

    if (Array.isArray(serverData)) {
      const verifiedServerData =
        await this._serverDataVerifier.verifyMany(serverData);
      const clientData =
        await this._serverDataTransformer.transformMany(verifiedServerData);
      const verifiedClientData =
        await this._clientDataVerifier.verifyMany(clientData);
      return verifiedClientData;
    } else {
      const verifiedServerData =
        await this._serverDataVerifier.verifyOne(serverData);
      const clientData =
        await this._serverDataTransformer.transformOne(verifiedServerData);
      const verifiedClientData =
        await this._clientDataVerifier.verifyOne(clientData);
      return verifiedClientData;
    }
  }
}
