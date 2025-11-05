import { InMemoryRepositorySetting } from '@/services/_base/constants/InMemoryRepositorySetting.ts';
import { type RepositoryQuery } from '@/services/_base/repository-queries-and-mutations/RepositoryQuery.ts';
import { RandomIntegerGenerator } from '@/utils/RandomIntegerGenerator.ts';

export abstract class InMemoryRepositoryQuery<TQueryOptions, TServerData>
  implements RepositoryQuery<TQueryOptions, TServerData>
{
  protected abstract _errorMessage: string;

  protected abstract _retrieveData(
    options: TQueryOptions,
  ): TServerData | null | undefined;

  public async query(
    options: TQueryOptions,
  ): Promise<TServerData | null | undefined> {
    const data = this._retrieveData(options);
    const delay = new RandomIntegerGenerator().generate({
      minimum: InMemoryRepositorySetting.MinimumDelayMs,
      maximum: InMemoryRepositorySetting.MaximumDelayMs,
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) resolve(data);
        else reject(new Error(this._errorMessage));
      }, delay);
    });
  }
}
