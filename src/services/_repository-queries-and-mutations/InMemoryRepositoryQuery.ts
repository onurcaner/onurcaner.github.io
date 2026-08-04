import { RandomIntegerGenerator } from '@/utils/RandomIntegerGenerator.ts';

import { InMemoryRepositorySetting } from '../_constants/InMemoryRepositorySetting.ts';
import { type RepositoryQuery } from '../_types/RepositoryQuery.ts';

export abstract class InMemoryRepositoryQuery<
  TQueryOptions,
  TServerData,
> implements RepositoryQuery<TQueryOptions, TServerData> {
  protected abstract _createErrorMessage(options: TQueryOptions): string;

  protected abstract _retrieveData(
    options: TQueryOptions,
  ): TServerData | null | undefined;

  public async query(options: TQueryOptions): Promise<TServerData> {
    const data = this._retrieveData(options);
    const delay = new RandomIntegerGenerator().generate({
      minimum: InMemoryRepositorySetting.MinimumDelayMs,
      maximum: InMemoryRepositorySetting.MaximumDelayMs,
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) resolve(data);
        else reject(new Error(this._createErrorMessage(options)));
      }, delay);
    });
  }
}
