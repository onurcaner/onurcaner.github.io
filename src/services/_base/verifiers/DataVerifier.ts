export interface DataVerifier<TData> {
  verify(data: unknown): Promise<TData>;
}
