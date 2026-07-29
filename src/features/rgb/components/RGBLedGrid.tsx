import { type ReactElement } from 'react';

import { type RGBBaseComponentProps } from '@/features/rgb/_types/RGBBaseComponentProps.ts';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBLedBox } from '@/features/rgb/components/RGBLedBox.tsx';

interface RGBLedGridProps extends RGBBaseComponentProps {
  rgbLedIndicesMatrix: RGBLedIndex[][];
}

export function RGBLedGrid({
  rgbLedIndicesMatrix,
  isUsingAlternative,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBLedGridProps): ReactElement {
  const rowCount = rgbLedIndicesMatrix.length;
  const columnCount = rgbLedIndicesMatrix[0].length;

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${String(rowCount)}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${String(columnCount)}, minmax(0, 1fr))`,
      }}
    >
      {rgbLedIndicesMatrix.map((indicesRow, rowIndex) =>
        indicesRow.map((rgbLedIndex, columnIndex) => (
          <RGBLedBox
            key={`${rowIndex.toString()}_${columnIndex.toString()}`}
            rgbLedIndex={rgbLedIndex}
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
