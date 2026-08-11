import { type ReactElement } from 'react';

import { type RGBBaseComponentProps } from '../_types/RGBBaseComponentProps.ts';
import { type RGBLedIndex } from '../_types/RGBLedIndex.ts';

import { RGBLedBox } from './RGBLedBox.tsx';

interface RGBLedGridProps extends RGBBaseComponentProps {
  rgbLedIndicesMatrix: RGBLedIndex[][];
}

export function RGBLedGrid({
  rgbLedIndicesMatrix,
  isUsingAlternativeColors,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBLedGridProps): ReactElement {
  // Derived State
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
            isUsingAlternativeColors={isUsingAlternativeColors}
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
