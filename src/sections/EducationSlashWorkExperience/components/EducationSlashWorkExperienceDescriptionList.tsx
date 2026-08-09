import { type ReactElement, type ReactNode, useLayoutEffect } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { useListDataQuery } from '@/contexts/remote/list/useListDataQuery.tsx';

import { useEducationSlashWorkExperienceDescriptionListItemCountContext } from '../contexts/useEducationSlashWorkExperienceDescriptionListItemCountContext.tsx';

export function EducationSlashWorkExperienceDescriptionList({
  listId,
  educationSlashWorkExperienceIndex,
  listIndex,
}: {
  listId: string;
  educationSlashWorkExperienceIndex: number;
  listIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const list = useListDataQuery({ id: listId });
  const { setItemCount, itemCountMatrix } =
    useEducationSlashWorkExperienceDescriptionListItemCountContext();

  // Hooks - Elevated State Synchronisation
  useLayoutEffect(() => {
    const itemCount = itemCountMatrix
      .at(educationSlashWorkExperienceIndex)
      ?.at(listIndex);
    if (itemCount === undefined) return;
    if (itemCount === list.items.length) return;

    setItemCount({
      newItemCount: list.items.length,
      educationSlashWorkExperienceIndex: educationSlashWorkExperienceIndex,
      descriptionListIndex: listIndex,
    });
  }, [
    educationSlashWorkExperienceIndex,
    itemCountMatrix,
    list.items.length,
    listIndex,
    setItemCount,
  ]);

  return (
    <div className="grid">
      <DescriptionListTitle>{list.title}</DescriptionListTitle>
      <ul>
        {list.items.map((item, i) => (
          <DescriptionListItem key={i}>{item}</DescriptionListItem>
        ))}
      </ul>
    </div>
  );
}

function DescriptionListTitle({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <h5 className="text-4 font-semibold text-(--theme-component-education-slash-work-experience-description-list-title-text-color)">
      {children}
    </h5>
  );
}

function DescriptionListItem({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return (
    <li className="flex items-center gap-x-2">
      {/* Icon */}
      <div
        className="text-3 mx-0.5 text-(--theme-component-education-slash-work-experience-description-list-item-icon-color)"
        aria-hidden={true}
      >
        <UIIcon iconName={IconName.Minus} />
      </div>

      {/* Text */}
      <p className="text-4 font-light text-(--theme-component-education-slash-work-experience-description-list-item-text-color)">
        {children}
      </p>
    </li>
  );
}
