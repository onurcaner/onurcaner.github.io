import { describe, expect, test } from 'vitest';

import { LinearMatrixDirection } from '../../_types/LinearMatrixDirection.ts';

import { LinearRGBLedIndicesMatrixGenerator } from './LinearRGBLedIndicesMatrixGenerator.ts';

describe('LinearRGBLedIndicesMatrixGenerator()', () => {
  describe('ToRight', () => {
    describe('stackSize=1', () => {
      test.each([
        {
          startIndex: 0,
          endIndex: 144,
          length: 8,
          expectedValue: [[0, 1, 2, 3, 4, 5, 6, 7]],
        },
        {
          startIndex: 20,
          endIndex: 144,
          length: 4,
          expectedValue: [[20, 21, 22, 23]],
        },
      ])(
        'startIndex: $startIndex, endIndex: $endIndex, length: $length, expectedValue: $expectedValue',
        ({ startIndex, endIndex, length, expectedValue }) => {
          // Arrange
          const stackSize = 1;
          const generator = new LinearRGBLedIndicesMatrixGenerator({
            startIndex: startIndex,
            boundaryIndex: endIndex,
            length: length,
            direction: LinearMatrixDirection.ToRight,
            stackSize: stackSize,
          });

          // Act
          const actualValue = generator.generate();

          // Assert
          expect(actualValue).toStrictEqual(expectedValue);
        },
      );
    });

    describe('stackSize=1, with waterfall effect 3 times', () => {
      test.each([
        {
          startIndex: 0,
          endIndex: 144,
          length: 8,
          expectedValues: [
            [[0, 1, 2, 3, 4, 5, 6, 7]],
            [[8, 9, 10, 11, 12, 13, 14, 15]],
            [[16, 17, 18, 19, 20, 21, 22, 23]],
          ],
        },
        {
          startIndex: 20,
          endIndex: 144,
          length: 4,
          expectedValues: [
            [[20, 21, 22, 23]],
            [[24, 25, 26, 27]],
            [[28, 29, 30, 31]],
          ],
        },
      ])(
        'startIndex: $startIndex, endIndex: $endIndex, length: $length, expectedValues: $expectedValues',
        ({ startIndex, endIndex, length, expectedValues }) => {
          // Arrange
          const stackSize = 1;
          const generator = new LinearRGBLedIndicesMatrixGenerator({
            startIndex: startIndex,
            boundaryIndex: endIndex,
            length: length,
            direction: LinearMatrixDirection.ToRight,
            stackSize: stackSize,
          });

          // Act
          const actualValues = [
            generator.generate(),
            generator.generate(),
            generator.generate(),
          ];

          // Assert
          expect(actualValues).toStrictEqual(expectedValues);
        },
      );
    });

    describe('stackSize=1, with waterfall effect enough that causes overflow', () => {
      test.each([
        {
          startIndex: 0,
          endIndex: 24,
          length: 10,
          expectedValues: [
            [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
            [[10, 11, 12, 13, 14, 15, 16, 17, 18, 19]],
            [[20, 21, 22, 23, 0, 1, 2, 3, 4, 5]],
            [[6, 7, 8, 9, 10, 11, 12, 13, 14, 15]],
            [[16, 17, 18, 19, 20, 21, 22, 23, 0, 1]],
          ],
        },
      ])(
        'startIndex: $startIndex, endIndex: $endIndex, length: $length, expectedValues: $expectedValues',
        ({ startIndex, endIndex, length, expectedValues }) => {
          // Arrange
          const stackSize = 1;
          const generator = new LinearRGBLedIndicesMatrixGenerator({
            startIndex: startIndex,
            boundaryIndex: endIndex,
            length: length,
            direction: LinearMatrixDirection.ToRight,
            stackSize: stackSize,
          });

          // Act
          const actualValues = Array.from({
            length: expectedValues.length,
          }).map(() => generator.generate());

          // Assert
          expect(actualValues).toStrictEqual(expectedValues);
        },
      );
    });

    describe('stackSize=1, reset waterfall effect', () => {
      test.each([
        {
          startIndex: 0,
          endIndex: 16,
          length: 10,
          initialExpectedValues: [
            [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
            [[10, 11, 12, 13, 14, 15, 0, 1, 2, 3]],
          ],
          expectedValuesBeforeResetting: [
            [[4, 5, 6, 7, 8, 9, 10, 11, 12, 13]],
            [[14, 15, 0, 1, 2, 3, 4, 5, 6, 7]],
          ],
          expectedValuesAfterResetting: [
            [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
            [[10, 11, 12, 13, 14, 15, 0, 1, 2, 3]],
          ],
        },
      ])(
        'startIndex: $startIndex, endIndex: $endIndex, length: $length, initialExpectedValues: $initialExpectedValues, expectedValuesBeforeResetting: $expectedValuesBeforeResetting, expectedValuesAfterResetting: $expectedValuesAfterResetting',
        ({
          startIndex,
          endIndex,
          length,
          initialExpectedValues,
          expectedValuesBeforeResetting,
          expectedValuesAfterResetting,
        }) => {
          // Arrange
          const stackSize = 1;
          const generator = new LinearRGBLedIndicesMatrixGenerator({
            startIndex: startIndex,
            boundaryIndex: endIndex,
            length: length,
            direction: LinearMatrixDirection.ToRight,
            stackSize: stackSize,
          });

          // Act
          const initialActualValues = Array.from({
            length: initialExpectedValues.length,
          }).map(() => generator.generate());
          const actualValuesBeforeResetting = Array.from({
            length: expectedValuesBeforeResetting.length,
          }).map(() => generator.generate());

          generator.reset();
          const actualValuesAfterResetting = Array.from({
            length: expectedValuesAfterResetting.length,
          }).map(() => generator.generate());

          // Assert
          expect(initialActualValues).toStrictEqual(initialExpectedValues);
          expect(actualValuesBeforeResetting).toStrictEqual(
            expectedValuesBeforeResetting,
          );
          expect(actualValuesAfterResetting).toStrictEqual(
            expectedValuesAfterResetting,
          );
        },
      );
    });

    describe('stackSize=3', () => {
      test.each([
        {
          startIndex: 0,
          endIndex: 144,
          length: 8,
          expectedValue: [
            [0, 1, 2, 3, 4, 5, 6, 7],
            [144, 145, 146, 147, 148, 149, 150, 151],
            [288, 289, 290, 291, 292, 293, 294, 295],
          ],
        },
        {
          startIndex: 20,
          endIndex: 144,
          length: 4,
          expectedValue: [
            [20, 21, 22, 23],
            [164, 165, 166, 167],
            [308, 309, 310, 311],
          ],
        },
      ])(
        'startIndex: $startIndex, endIndex: $endIndex, length: $length, expectedValue: $expectedValue',
        ({ startIndex, endIndex, length, expectedValue }) => {
          // Arrange
          const stackSize = 3;
          const generator = new LinearRGBLedIndicesMatrixGenerator({
            startIndex: startIndex,
            boundaryIndex: endIndex,
            length: length,
            direction: LinearMatrixDirection.ToRight,
            stackSize: stackSize,
          });

          // Act
          const actualValue = generator.generate();

          // Assert
          expect(actualValue).toStrictEqual(expectedValue);
        },
      );
    });

    describe('stackSize=3, with waterfall effect 3 times', () => {
      test.each([
        {
          startIndex: 0,
          endIndex: 144,
          length: 8,
          expectedValues: [
            [
              [0, 1, 2, 3, 4, 5, 6, 7],
              [144, 145, 146, 147, 148, 149, 150, 151],
              [288, 289, 290, 291, 292, 293, 294, 295],
            ],
            [
              [8, 9, 10, 11, 12, 13, 14, 15],
              [152, 153, 154, 155, 156, 157, 158, 159],
              [296, 297, 298, 299, 300, 301, 302, 303],
            ],
            [
              [16, 17, 18, 19, 20, 21, 22, 23],
              [160, 161, 162, 163, 164, 165, 166, 167],
              [304, 305, 306, 307, 308, 309, 310, 311],
            ],
          ],
        },
        {
          startIndex: 20,
          endIndex: 144,
          length: 4,
          expectedValues: [
            [
              [20, 21, 22, 23],
              [164, 165, 166, 167],
              [308, 309, 310, 311],
            ],
            [
              [24, 25, 26, 27],
              [168, 169, 170, 171],
              [312, 313, 314, 315],
            ],
            [
              [28, 29, 30, 31],
              [172, 173, 174, 175],
              [316, 317, 318, 319],
            ],
          ],
        },
      ])(
        'startIndex: $startIndex, endIndex: $endIndex, length: $length, expectedValues: $expectedValues',
        ({ startIndex, endIndex, length, expectedValues }) => {
          // Arrange
          const stackSize = 3;
          const generator = new LinearRGBLedIndicesMatrixGenerator({
            startIndex: startIndex,
            boundaryIndex: endIndex,
            length: length,
            direction: LinearMatrixDirection.ToRight,
            stackSize: stackSize,
          });

          // Act
          const actualValues = [
            generator.generate(),
            generator.generate(),
            generator.generate(),
          ];

          // Assert
          expect(actualValues).toStrictEqual(expectedValues);
        },
      );
    });
  });
});
