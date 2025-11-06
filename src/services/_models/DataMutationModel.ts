import { DataTransformer } from '@/services/_transformers/DataTransformer.ts';
import { type RepositoryMutation } from '@/services/_types/RepositoryMutation.ts';
import { DataVerifier } from '@/services/_verifiers/DataVerifier.ts';

export class DataMutationModel<TMutationOptions, TClientData, TServerData> {
  private _repositoryMutation: RepositoryMutation<
    TMutationOptions,
    TServerData
  >;
  private _clientDataVerifier: DataVerifier<TClientData>;
  private _clientDataTransformer: DataTransformer<TClientData, TServerData>;
  private _serverDataVerifier: DataVerifier<TServerData>;
  constructor({
    repositoryMutation,
    clientDataVerifier,
    clientDataTransformer,
    serverDataVerifier,
  }: {
    repositoryMutation: RepositoryMutation<TMutationOptions, TServerData>;
    clientDataVerifier: DataVerifier<TClientData>;
    clientDataTransformer: DataTransformer<TClientData, TServerData>;
    serverDataVerifier: DataVerifier<TServerData>;
  }) {
    this._repositoryMutation = repositoryMutation;
    this._serverDataVerifier = serverDataVerifier;
    this._clientDataTransformer = clientDataTransformer;
    this._clientDataVerifier = clientDataVerifier;
  }

  public async mutate(
    mutationOptions: TMutationOptions,
    data: TClientData,
  ): Promise<void> {
    const verifiedClientData = await this._clientDataVerifier.verify(data);
    const serverData =
      await this._clientDataTransformer.transform(verifiedClientData);
    const verifiedServerData =
      await this._serverDataVerifier.verify(serverData);
    await this._repositoryMutation.mutate(mutationOptions, verifiedServerData);
  }
}
