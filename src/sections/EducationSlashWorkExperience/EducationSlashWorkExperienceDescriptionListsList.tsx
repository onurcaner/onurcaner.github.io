import type { ReactElement } from 'react';

import { EducationSlashWorkExperienceDescriptionList } from './EducationSlashWorkExperienceDescriptionList.tsx';

export function EducationSlashWorkExperienceDescriptionListsList({
  listIds,
}: {
  listIds: string[];
}): ReactElement {
  return (
    <ul>
      {listIds.map((listId) => (
        <li key={listId}>
          <EducationSlashWorkExperienceDescriptionList listId={listId} />
        </li>
      ))}
    </ul>
  );
}
