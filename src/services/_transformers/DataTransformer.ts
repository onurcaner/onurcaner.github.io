export abstract class DataTransformer<TFrom, TTo> {
  protected abstract _transformOne(data: TFrom): Promise<TTo>;

  public transform(data: TFrom): Promise<TTo>;
  public transform(data: TFrom[]): Promise<TTo[]>;
  public transform(data: TFrom | TFrom[]): Promise<TTo | TTo[]> {
    if (!Array.isArray(data)) {
      return this._transformOne(data);
    }

    const promises = data.map((piece) => this._transformOne(piece));
    return Promise.all(promises);
  }
}
