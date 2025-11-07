export abstract class DataVerifier<TData> {
  protected abstract _verifyOne(item: unknown): Promise<TData>;

  public async verify(data: TData | null | undefined): Promise<TData>;
  public async verify(data: TData[] | null | undefined): Promise<TData[]>;
  public async verify(
    data: TData | TData[] | null | undefined,
  ): Promise<TData | TData[]> {
    return Array.isArray(data) ? this.verifyMany(data) : this.verifyOne(data);
  }

  public async verifyOne(item: TData | null | undefined): Promise<TData> {
    return this._verifyOne(item);
  }

  public async verifyMany(items: unknown[]): Promise<TData[]> {
    const promises = items.map((item) => this._verifyOne(item));
    return Promise.all(promises);
  }
}
