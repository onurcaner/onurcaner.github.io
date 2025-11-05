export abstract class DataTransformer<TFrom, TTo> {
  protected abstract transformOne(data: TFrom): Promise<TTo>;

  public transform(data: TFrom): Promise<TTo>;
  public transform(data: TFrom[]): Promise<TTo[]>;
  public transform(data: TFrom | TFrom[]): Promise<TTo | TTo[]> {
    if (!Array.isArray(data)) {
      return this.transformOne(data);
    }

    const promises = data.map((piece) => this.transformOne(piece));
    return Promise.all(promises);
  }
}
