import { type ReactElement } from 'react';

import { type RGBBaseProps } from '@/components/RGB/RGBBaseProps.ts';
import { RGBLedBox } from '@/components/RGB/RGBLedBox.tsx';

interface RGBLedGridProps extends RGBBaseProps {
  ledIndicesMatrix: (number | null)[][];
}

export function RGBLedGrid({
  ledIndicesMatrix,
  isUsingAlternative,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBLedGridProps): ReactElement {
  const rowCount = ledIndicesMatrix.length;
  const columnCount = ledIndicesMatrix[0].length;

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${String(rowCount)}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${String(columnCount)}, minmax(0, 1fr))`,
      }}
    >
      {ledIndicesMatrix.map((ledIndicesRow, rowIndex) =>
        ledIndicesRow.map((ledIndex, columnIndex) => (
          <RGBLedBox
            key={`${rowIndex.toString()}_${columnIndex.toString()}`}
            ledIndex={ledIndex}
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
