import {
  type ReactElement,
  type ReactNode,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';

import { EducationSlashWorkExperienceDescriptionListItemCountContext } from './EducationSlashWorkExperienceDescriptionListItemCountContext.tsx';

export function EducationSlashWorkExperienceDescriptionListItemCountContextProvider({
  children,
  educationSlashWorkExperienceCount,
}: {
  children: ReactNode;
  educationSlashWorkExperienceCount: number;
}): ReactElement {
  // Hooks - Local States
  const [itemCountMatrix, setItemCountMatrix] = useState<number[][]>(() =>
    Array.from({ length: educationSlashWorkExperienceCount }).map(() => []),
  );

  // Hooks - Props to Local State Synchronization
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItemCountMatrix(() =>
      Array.from({ length: educationSlashWorkExperienceCount }).map(() => []),
    );
  }, [educationSlashWorkExperienceCount]);

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
    <EducationSlashWorkExperienceDescriptionListItemCountContext
      value={{
        itemCountMatrix: itemCountMatrix,

        resetItemCounts: useCallback(
          ({ educationSlashWorkExperienceIndex, descriptionListCount }) => {
            resetRow(educationSlashWorkExperienceIndex, descriptionListCount);
          },
          [resetRow],
        ),

        setItemCount: useCallback(
          ({
            newItemCount,
            educationSlashWorkExperienceIndex,
            descriptionListIndex,
          }) => {
            setCell(
              newItemCount,
              educationSlashWorkExperienceIndex,
              descriptionListIndex,
            );
          },
          [setCell],
        ),
      }}
    >
      {children}
    </EducationSlashWorkExperienceDescriptionListItemCountContext>
  );
}
