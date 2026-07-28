import { type ReactElement } from 'react';

import { type RGBBaseComponentProps } from '@/features/rgb/_types/RGBBaseComponentProps.ts';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBLedBox } from '@/features/rgb/components/RGBLedBox.tsx';

interface RGBLedGridProps extends RGBBaseComponentProps {
  indicesMatrix: RGBLedIndex[][];
}

export function RGBLedGrid({
  indicesMatrix,
  isUsingAlternative,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBLedGridProps): ReactElement {
  const rowCount = indicesMatrix.length;
  const columnCount = indicesMatrix[0].length;

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${String(rowCount)}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${String(columnCount)}, minmax(0, 1fr))`,
      }}
    >
      {indicesMatrix.map((indicesRow, rowIndex) =>
        indicesRow.map((ledIndex, columnIndex) => (
          <RGBLedBox
            key={`${rowIndex.toString()}_${columnIndex.toString()}`}
            rgbLedIndex={ledIndex}
            isUsingAlternative={isUsingAlternative}
            preferredNormalFallbackColor={preferredNormalFallbackColor}
            preferredAlternativeFallbackColor={
              preferredAlternativeFallbackColor
            }
          />
        )),
      )}
    </div>
  );
}
