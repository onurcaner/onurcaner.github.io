import { InMemoryRepositoryQuery } from '@/services/_repository-queries-and-mutations/InMemoryRepositoryQuery.ts';
import { inMemorySkillRepository } from '@/services/skill/constants/inMemorySkillRepository.ts';
import { type SkillDataFindManyQueryOptions } from '@/services/skill/types/SkillDataFindManyQueryOptions.ts';
import { type SkillServerData } from '@/services/skill/types/SkillServerData.ts';

export class InMemorySkillRepositoryFindManyQuery extends InMemoryRepositoryQuery<
  SkillDataFindManyQueryOptions,
  SkillServerData[]
> {
  protected override _errorMessage = 'Could not find any "Skills"';

  protected override _retrieveData(
    options: SkillDataFindManyQueryOptions,
  ): SkillServerData[] | null | undefined {
    const result = inMemorySkillRepository
      .filter(
        (data) => data.content_language_code === options.contentLanguageCode,
      )
      .filter((data) =>
        options.associatedSkillCategories
          .map((skillCategoryOption) =>
            data.associated_skill_categories.includes(skillCategoryOption),
          )
          .reduce((reduced, current) => reduced || current, false),
      )
      .toSorted((dataA, dataB) => (dataA.label >= dataB.label ? 1 : 0));

    return result.length > 0 ? result : null;
  }
}
