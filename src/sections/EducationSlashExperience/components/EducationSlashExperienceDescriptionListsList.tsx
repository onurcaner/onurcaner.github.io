import { type ReactElement, useLayoutEffect } from 'react';

import { useEducationSlashExperienceDescriptionListItemCountContext } from '../contexts/useEducationSlashExperienceDescriptionListItemCountContext.tsx';

import { EducationSlashExperienceDescriptionList } from './EducationSlashExperienceDescriptionList.tsx';

export function EducationSlashWorkExperienceDescriptionListsList({
  descriptionListIds,
  educationSlashWorkExperienceIndex,
}: {
  descriptionListIds: string[];
  educationSlashWorkExperienceIndex: number;
}): ReactElement {
  // Hooks - Elevated State
  const { itemCountMatrix, resetItemCounts } =
    useEducationSlashExperienceDescriptionListItemCountContext();

  // Hooks - Elevated State Synchronisation
  useLayoutEffect(() => {
    const descriptionLists = itemCountMatrix.at(
      educationSlashWorkExperienceIndex,
    );
    if (descriptionLists === undefined) return;
    if (descriptionLists.length === descriptionListIds.length) return;

    resetItemCounts({
      educationSlashExperienceIndex: educationSlashWorkExperienceIndex,
      descriptionListCount: descriptionListIds.length,
    });
  }, [
    descriptionListIds.length,
    educationSlashWorkExperienceIndex,
    itemCountMatrix,
    resetItemCounts,
  ]);

  return (
    <ul className="grid gap-y-5">
      {descriptionListIds.map((listId, listIndex) => (
        <li key={listId}>
          <EducationSlashExperienceDescriptionList
            listId={listId}
            educationSlashExperienceIndex={
              educationSlashWorkExperienceIndex
            }
            listIndex={listIndex}
          />
        </li>
      ))}
    </ul>
  );
}
