import { type ReactElement, useLayoutEffect } from 'react';

import { useEducationSlashWorkExperienceDescriptionListItemCountContext } from '../contexts/useEducationSlashWorkExperienceDescriptionListItemCountContext.tsx';

import { EducationSlashWorkExperienceDescriptionList } from './EducationSlashWorkExperienceDescriptionList.tsx';

export function EducationSlashWorkExperienceDescriptionListsList({
  descriptionListIds,
  educationSlashWorkExperienceIndex,
}: {
  descriptionListIds: string[];
  educationSlashWorkExperienceIndex: number;
}): ReactElement {
  // Hooks - Elevated State
  const { itemCountMatrix, resetItemCounts } =
    useEducationSlashWorkExperienceDescriptionListItemCountContext();

  // Hooks - Elevated State Synchronisation
  useLayoutEffect(() => {
    const descriptionLists = itemCountMatrix.at(
      educationSlashWorkExperienceIndex,
    );
    if (descriptionLists === undefined) return;
    if (descriptionLists.length === descriptionListIds.length) return;

    resetItemCounts({
      educationSlashWorkExperienceIndex: educationSlashWorkExperienceIndex,
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
          <EducationSlashWorkExperienceDescriptionList
            listId={listId}
            educationSlashWorkExperienceIndex={
              educationSlashWorkExperienceIndex
            }
            listIndex={listIndex}
          />
        </li>
      ))}
    </ul>
  );
}
