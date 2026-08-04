import { ContentLanguageCode } from '../../_constants/ContentLanguageCode.ts';
import { type InMemoryRepository } from '../../_types/InMemoryRepository.ts';
import { InMemoryExternalLinkRepository } from '../../external-link/constants/InMemoryExternalLinkRepository.ts';
import { type ExternalLinkServerData } from '../../external-link/types/ExternalLinkServerData.ts';

import { type DeveloperServerData } from '../types/DeveloperServerData.ts';

export class InMemoryDeveloperRepository implements InMemoryRepository<DeveloperServerData> {
  public get repository(): DeveloperServerData[] {
    return [
      {
        id: '94a330d6-8137-427e-a2e8-b0b0bc0410ca',
        content_language_code: ContentLanguageCode.English,
        name: 'Onur Caner',
        job_title: 'Frontend Developer',
        external_link_ids: this._externalLinkRepository
          .filter(
            (linkData) =>
              linkData.content_language_code === ContentLanguageCode.English,
          )
          .map((linkData) => linkData.id),
        is_open_to_work: true,
      },

      {
        id: '9edb3942-8ca2-40ae-bb16-ba5d79a20955',
        content_language_code: ContentLanguageCode.Turkish,
        name: 'Onur Caner',
        job_title: 'Ön uç geliştirici',
        external_link_ids: this._externalLinkRepository
          .filter(
            (linkData) =>
              linkData.content_language_code === ContentLanguageCode.Turkish,
          )
          .map((linkData) => linkData.id),
        is_open_to_work: true,
      },
    ];
  }

  private get _externalLinkRepository(): ExternalLinkServerData[] {
    return new InMemoryExternalLinkRepository().repository;
  }
}
