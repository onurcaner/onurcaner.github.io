import { type ReactElement, useLayoutEffect } from 'react';

import { useEducationSlashExperienceDescriptionListItemCountContext } from '../contexts/useEducationSlashExperienceDescriptionListItemCountContext.tsx';

import { EducationSlashExperienceDescriptionList } from './EducationSlashExperienceDescriptionList.tsx';

export function EducationSlashExperienceDescriptionListsList({
  descriptionListIds,
  educationSlashExperienceIndex,
}: {
  descriptionListIds: string[];
  educationSlashExperienceIndex: number;
}): ReactElement {
  // Hooks - Elevated State
  const { itemCountMatrix, resetItemCounts } =
    useEducationSlashExperienceDescriptionListItemCountContext();

  // Hooks - Elevated State Synchronisation
  useLayoutEffect(() => {
    const descriptionLists = itemCountMatrix.at(educationSlashExperienceIndex);
    if (descriptionLists === undefined) return;
    if (descriptionLists.length === descriptionListIds.length) return;

    resetItemCounts({
      educationSlashExperienceIndex: educationSlashExperienceIndex,
      descriptionListCount: descriptionListIds.length,
    });
  }, [
    descriptionListIds.length,
    educationSlashExperienceIndex,
    itemCountMatrix,
    resetItemCounts,
  ]);

  return (
    <ul className="grid gap-y-5">
      {descriptionListIds.map((listId, listIndex) => (
        <li key={listId}>
          <EducationSlashExperienceDescriptionList
            listId={listId}
            educationSlashExperienceIndex={educationSlashExperienceIndex}
            listIndex={listIndex}
          />
        </li>
      ))}
    </ul>
  );
}
