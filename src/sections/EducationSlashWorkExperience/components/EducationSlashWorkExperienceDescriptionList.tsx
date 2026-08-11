import { type ReactElement, type ReactNode, useLayoutEffect } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { useListDataQuery } from '@/contexts/remote/list/useListDataQuery.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { useEducationSlashWorkExperienceDescriptionListItemCountContext } from '../contexts/useEducationSlashWorkExperienceDescriptionListItemCountContext.tsx';
import { useEducationSlashWorkExperienceWaterfallOffsetsContext } from '../contexts/useEducationSlashWorkExperienceWaterfallOffsetsContext.tsx';

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
      <DescriptionListTitle
        educationSlashWorkExperienceIndex={educationSlashWorkExperienceIndex}
        listIndex={listIndex}
      >
        {list.title}
      </DescriptionListTitle>

      <ul className="grid">
        {list.items.map((item, i) => (
          <DescriptionListItem
            key={i}
            educationSlashWorkExperienceIndex={
              educationSlashWorkExperienceIndex
            }
            listIndex={listIndex}
            itemIndex={i}
          >
            {item}
          </DescriptionListItem>
        ))}
      </ul>
    </div>
  );
}

function DescriptionListTitle({
  children,
  educationSlashWorkExperienceIndex,
  listIndex,
}: {
  children: ReactNode;
  educationSlashWorkExperienceIndex: number;
  listIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const {
    educationSlashWorkExperienceWaterfallOffsets,
    educationSlashWorkExperienceDescriptionListWaterfallOffsets,
  } = useEducationSlashWorkExperienceWaterfallOffsetsContext();

  // Derived States
  const waterfallOffsets = {
    educationSlashWorkExperience:
      educationSlashWorkExperienceWaterfallOffsets.at(
        educationSlashWorkExperienceIndex,
      ) ?? 0,
    list:
      educationSlashWorkExperienceDescriptionListWaterfallOffsets
        .at(educationSlashWorkExperienceIndex)
        ?.at(listIndex) ?? 0,
  };
  const waterFallOffset =
    waterfallOffsets.educationSlashWorkExperience + waterfallOffsets.list;

  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.educationSlashWorkExperienceDescriptionListTitle.createMatrix(
      {
        waterfallLength:
          waterFallOffset +
          rgbLedIndicesMatrixCreators.educationSlashWorkExperienceTitle
            .groupLength,
        waterfallCount: 1,
      },
    );

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-education-slash-work-experience-description-list-title-text-color)"
    >
      <h5 className="text-4 font-semibold">{children}</h5>
    </RGBText>
  );
}

function DescriptionListItem({
  children,
  educationSlashWorkExperienceIndex,
  listIndex,
  itemIndex,
}: {
  children: ReactNode;
  educationSlashWorkExperienceIndex: number;
  listIndex: number;
  itemIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const {
    educationSlashWorkExperienceWaterfallOffsets,
    educationSlashWorkExperienceDescriptionListWaterfallOffsets,
  } = useEducationSlashWorkExperienceWaterfallOffsetsContext();

  // Derived States
  const waterfallOffsets = {
    educationSlashWorkExperience:
      educationSlashWorkExperienceWaterfallOffsets.at(
        educationSlashWorkExperienceIndex,
      ) ?? 0,
    list:
      educationSlashWorkExperienceDescriptionListWaterfallOffsets
        .at(educationSlashWorkExperienceIndex)
        ?.at(listIndex) ?? 0,
    listTitle:
      rgbLedIndicesMatrixCreators
        .educationSlashWorkExperienceDescriptionListTitle.selfLength,
  };
  const waterFallOffset =
    waterfallOffsets.educationSlashWorkExperience +
    rgbLedIndicesMatrixCreators.educationSlashWorkExperienceTitle.groupLength +
    waterfallOffsets.list +
    waterfallOffsets.listTitle;

  const rgbLedIndicesMatrices = {
    icon: rgbLedIndicesMatrixCreators.educationSlashWorkExperienceDescriptionListItemIcon.createMatrix(
      {
        waterfallLength:
          waterFallOffset +
          itemIndex *
            rgbLedIndicesMatrixCreators
              .educationSlashWorkExperienceDescriptionListItemIcon.groupLength,
        waterfallCount: 1,
      },
    ),
    text: rgbLedIndicesMatrixCreators.educationSlashWorkExperienceDescriptionListItemText.createMatrix(
      {
        waterfallLength:
          waterFallOffset +
          itemIndex *
            rgbLedIndicesMatrixCreators
              .educationSlashWorkExperienceDescriptionListItemText.groupLength,
        waterfallCount: 1,
      },
    ),
  };

  return (
    <li className="relative grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-x-0">
      {/* Icon */}
      <RGBText
        parentBackgroundClassName="bg-(--theme-component-section-background-color)"
        rgbLedIndicesMatrix={rgbLedIndicesMatrices.icon}
        isUsingAlternativeColors={false}
        preferredNormalFallbackColor="var(--theme-component-education-slash-work-experience-description-list-item-icon-color)"
      >
        <div className="px-1 text-[0.5rem]" aria-hidden={true}>
          <UIIcon iconName={IconName.Minus} />
        </div>
      </RGBText>

      {/* Text */}
      <RGBText
        parentBackgroundClassName="bg-(--theme-component-section-background-color)"
        rgbLedIndicesMatrix={rgbLedIndicesMatrices.text}
        isUsingAlternativeColors={false}
        preferredNormalFallbackColor="var(--theme-component-education-slash-work-experience-description-list-item-text-color)"
      >
        <p className="text-4 font-light">{children}</p>
      </RGBText>
    </li>
  );
}
