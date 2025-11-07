export abstract class DataTransformer<TFrom, TTo> {
  protected abstract _transformOne(data: TFrom): Promise<TTo>;

  public transform(data: TFrom): Promise<TTo>;
  public transform(data: TFrom[]): Promise<TTo[]>;
  public transform(data: TFrom | TFrom[]): Promise<TTo | TTo[]> {
    return Array.isArray(data)
      ? this.transformMany(data)
      : this.transformOne(data);
  }

  public transformOne(data: TFrom): Promise<TTo> {
    return this._transformOne(data);
  }

  public transformMany(data: TFrom[]): Promise<TTo[]> {
    const promises = data.map((data) => this._transformOne(data));
    return Promise.all(promises);
  }
}
