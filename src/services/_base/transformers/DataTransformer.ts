export interface DataTransformer<TFrom, TTo> {
  transform(data: TFrom): Promise<TTo>;
}
