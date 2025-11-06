export abstract class DataVerifier<TData> {
  protected abstract _verifyOne(data: unknown): Promise<TData>;

  public async verify(data: TData | null | undefined): Promise<TData>;
  public async verify(data: TData[] | null | undefined): Promise<TData[]>;
  public async verify(data: unknown): Promise<TData | TData[]> {
    if (!Array.isArray(data)) {
      return this._verifyOne(data);
    }

    const promises = data.map((piece) => this._verifyOne(piece));
    return Promise.all(promises);
  }
}
