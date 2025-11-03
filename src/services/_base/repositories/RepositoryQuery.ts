export interface RepositoryQuery<TQueryOptions, TServerData> {
  query(options: TQueryOptions): Promise<TServerData | null | undefined>;
}
