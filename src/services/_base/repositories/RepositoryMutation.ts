export interface RepositoryMutation<TMutationOptions, TServerData> {
  mutate(options: TMutationOptions, data: TServerData): Promise<void>;
}
