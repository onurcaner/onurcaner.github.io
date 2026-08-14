import { type ReactElement, type ReactNode, useLayoutEffect } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { useListDataQuery } from '@/contexts/remote/list/useListDataQuery.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { useEducationSlashExperienceDescriptionListItemCountContext } from '../contexts/useEducationSlashExperienceDescriptionListItemCountContext.tsx';
import { useEducationSlashExperienceWaterfallOffsetsContext } from '../contexts/useEducationSlashExperienceWaterfallOffsetsContext.tsx';

export function EducationSlashExperienceDescriptionList({
  listId,
  educationSlashExperienceIndex,
  listIndex,
}: {
  listId: string;
  educationSlashExperienceIndex: number;
  listIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const list = useListDataQuery({ id: listId });
  const { setItemCount, itemCountMatrix } =
    useEducationSlashExperienceDescriptionListItemCountContext();

  // Hooks - Elevated State Synchronisation
  useLayoutEffect(() => {
    const itemCount = itemCountMatrix
      .at(educationSlashExperienceIndex)
      ?.at(listIndex);
    if (itemCount === undefined) return;
    if (itemCount === list.items.length) return;

    setItemCount({
      newItemCount: list.items.length,
      educationSlashExperienceIndex: educationSlashExperienceIndex,
      descriptionListIndex: listIndex,
    });
  }, [
    educationSlashExperienceIndex,
    itemCountMatrix,
    list.items.length,
    listIndex,
    setItemCount,
  ]);

  return (
    <div className="grid">
      <DescriptionListTitle
        educationSlashExperienceIndex={educationSlashExperienceIndex}
        listIndex={listIndex}
      >
        {list.title}
      </DescriptionListTitle>

      <ul className="grid">
        {list.items.map((item, i) => (
          <DescriptionListItem
            key={i}
            educationSlashExperienceIndex={educationSlashExperienceIndex}
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
  educationSlashExperienceIndex,
  listIndex,
}: {
  children: ReactNode;
  educationSlashExperienceIndex: number;
  listIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const {
    educationSlashExperienceWaterfallOffsets,
    educationSlashExperienceDescriptionListWaterfallOffsets,
  } = useEducationSlashExperienceWaterfallOffsetsContext();

  // Derived States
  const waterfallOffsets = {
    educationSlashExperience:
      educationSlashExperienceWaterfallOffsets.at(
        educationSlashExperienceIndex,
      ) ?? 0,
    list:
      educationSlashExperienceDescriptionListWaterfallOffsets
        .at(educationSlashExperienceIndex)
        ?.at(listIndex) ?? 0,
  };
  const waterFallOffset =
    waterfallOffsets.educationSlashExperience + waterfallOffsets.list;

  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.educationSlashExperienceDescriptionListTitle.createMatrix(
      {
        waterfallLength:
          waterFallOffset +
          rgbLedIndicesMatrixCreators.educationSlashExperienceTitle.groupLength,
        waterfallCount: 1,
      },
    );

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-education-slash-experience-description-list-title-text-color)"
    >
      <h5 className="text-4 font-semibold">{children}</h5>
    </RGBText>
  );
}

function DescriptionListItem({
  children,
  educationSlashExperienceIndex,
  listIndex,
  itemIndex,
}: {
  children: ReactNode;
  educationSlashExperienceIndex: number;
  listIndex: number;
  itemIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const {
    educationSlashExperienceWaterfallOffsets,
    educationSlashExperienceDescriptionListWaterfallOffsets,
  } = useEducationSlashExperienceWaterfallOffsetsContext();

  // Derived States
  const waterfallOffsets = {
    educationSlashExperience:
      educationSlashExperienceWaterfallOffsets.at(
        educationSlashExperienceIndex,
      ) ?? 0,
    list:
      educationSlashExperienceDescriptionListWaterfallOffsets
        .at(educationSlashExperienceIndex)
        ?.at(listIndex) ?? 0,
    listTitle:
      rgbLedIndicesMatrixCreators.educationSlashExperienceDescriptionListTitle
        .selfLength,
  };
  const waterFallOffset =
    waterfallOffsets.educationSlashExperience +
    rgbLedIndicesMatrixCreators.educationSlashExperienceTitle.groupLength +
    waterfallOffsets.list +
    waterfallOffsets.listTitle;

  const rgbLedIndicesMatrices = {
    icon: rgbLedIndicesMatrixCreators.educationSlashExperienceDescriptionListItemIcon.createMatrix(
      {
        waterfallLength:
          waterFallOffset +
          itemIndex *
            rgbLedIndicesMatrixCreators
              .educationSlashExperienceDescriptionListItemIcon.groupLength,
        waterfallCount: 1,
      },
    ),
    text: rgbLedIndicesMatrixCreators.educationSlashExperienceDescriptionListItemText.createMatrix(
      {
        waterfallLength:
          waterFallOffset +
          itemIndex *
            rgbLedIndicesMatrixCreators
              .educationSlashExperienceDescriptionListItemText.groupLength,
        waterfallCount: 1,
      },
    ),
  };

  return (
    <li className="relative grid grid-cols-[max-content_minmax(0,1fr)] items-center gap-x-0">
      {/* Icon */}
      <RGBText
        parentBackgroundColor="var(--theme-component-section-background-color)"
        rgbLedIndicesMatrix={rgbLedIndicesMatrices.icon}
        isUsingAlternativeColors={false}
        preferredNormalFallbackColor="var(--theme-component-education-slash-experience-description-list-item-icon-color)"
      >
        <div className="px-1 text-[0.5rem]" aria-hidden={true}>
          <UIIcon iconName={IconName.Minus} />
        </div>
      </RGBText>

      {/* Text */}
      <RGBText
        parentBackgroundColor="var(--theme-component-section-background-color)"
        rgbLedIndicesMatrix={rgbLedIndicesMatrices.text}
        isUsingAlternativeColors={false}
        preferredNormalFallbackColor="var(--theme-component-education-slash-experience-description-list-item-text-color)"
      >
        <p className="text-4 font-light">{children}</p>
      </RGBText>
    </li>
  );
}
