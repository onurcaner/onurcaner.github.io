import { type RepositoryMutation } from '@/services/_base/repository-queries-and-mutations/RepositoryMutation.ts';
import { DataTransformer } from '@/services/_base/transformers/DataTransformer.ts';
import { DataVerifier } from '@/services/_base/verifiers/DataVerifier.ts';

export class DataMutationModel<TMutationOptions, TClientData, TServerData> {
  private _repositoryMutation: RepositoryMutation<
    TMutationOptions,
    TServerData
  >;
  private _clientDataVerifier: DataVerifier<TClientData>;
  private _clientToServerDataTransformer: DataTransformer<
    TClientData,
    TServerData
  >;
  private _serverDataVerifier: DataVerifier<TServerData>;
  constructor({
    repositoryMutation,
    clientDataVerifier,
    clientToServerDataTransformer,
    serverDataVerifier,
  }: {
    repositoryMutation: RepositoryMutation<TMutationOptions, TServerData>;
    clientDataVerifier: DataVerifier<TClientData>;
    clientToServerDataTransformer: DataTransformer<TClientData, TServerData>;
    serverDataVerifier: DataVerifier<TServerData>;
  }) {
    this._repositoryMutation = repositoryMutation;
    this._serverDataVerifier = serverDataVerifier;
    this._clientToServerDataTransformer = clientToServerDataTransformer;
    this._clientDataVerifier = clientDataVerifier;
  }

  public async mutate(
    mutationOptions: TMutationOptions,
    data: TClientData,
  ): Promise<void> {
    const verifiedClientData = await this._clientDataVerifier.verify(data);
    const serverData =
      await this._clientToServerDataTransformer.transform(verifiedClientData);
    const verifiedServerData =
      await this._serverDataVerifier.verify(serverData);
    await this._repositoryMutation.mutate(mutationOptions, verifiedServerData);
  }
}
