export abstract class DataVerifier<TData> {
  protected abstract verifyOne(data: unknown): Promise<TData>;

  public async verify(data: TData | null | undefined): Promise<TData>;
  public async verify(data: TData[] | null | undefined): Promise<TData[]>;
  public async verify(data: unknown): Promise<TData | TData[]> {
    if (!Array.isArray(data)) {
      return this.verifyOne(data);
    }

    const promises = data.map((piece) => this.verifyOne(piece));
    return Promise.all(promises);
  }
}
