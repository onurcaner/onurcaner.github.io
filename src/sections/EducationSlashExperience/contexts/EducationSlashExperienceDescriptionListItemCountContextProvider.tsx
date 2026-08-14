import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';

import { EducationSlashExperienceDescriptionListItemCountContext } from './EducationSlashExperienceDescriptionListItemCountContext.tsx';

export function EducationSlashExperienceDescriptionListItemCountContextProvider({
  children,
  educationSlashExperienceCount,
}: {
  children: ReactNode;
  educationSlashExperienceCount: number;
}): ReactElement {
  // Hooks - Local States
  const [itemCountMatrix, setItemCountMatrix] = useState<number[][]>(() =>
    Array.from({ length: educationSlashExperienceCount }).map(() => []),
  );

  // Hooks - Props to Local State Synchronization
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItemCountMatrix(() =>
      Array.from({ length: educationSlashExperienceCount }).map(() => []),
    );
  }, [educationSlashExperienceCount]);

  // Hooks - State Transition Methods
  const resetRow = useCallback(
    (targetRowIndex: number, columnCount: number): void => {
      setItemCountMatrix((itemCountMatrix) =>
        itemCountMatrix.map((row, rowIndex) =>
          rowIndex === targetRowIndex
            ? Array.from({ length: columnCount }).map(() => 0)
            : [...row],
        ),
      );
    },
    [],
  );

  const setCell = useCallback(
    (
      newValue: number,
      targetRowIndex: number,
      targetColumnIndex: number,
    ): void => {
      setItemCountMatrix((itemCountMatrix) =>
        itemCountMatrix.map((row, rowIndex) =>
          row.map((value, columnIndex) =>
            targetRowIndex === rowIndex && targetColumnIndex === columnIndex
              ? newValue
              : value,
          ),
        ),
      );
    },
    [],
  );

  return (
    <EducationSlashExperienceDescriptionListItemCountContext
      value={{
        itemCountMatrix: itemCountMatrix,

        resetItemCounts: useCallback(
          ({ educationSlashExperienceIndex, descriptionListCount }) => {
            resetRow(educationSlashExperienceIndex, descriptionListCount);
          },
          [resetRow],
        ),

        setItemCount: useCallback(
          ({
            newItemCount,
            educationSlashExperienceIndex,
            descriptionListIndex,
          }) => {
            setCell(
              newItemCount,
              educationSlashExperienceIndex,
              descriptionListIndex,
            );
          },
          [setCell],
        ),
      }}
    >
      {children}
    </EducationSlashExperienceDescriptionListItemCountContext>
  );
}
