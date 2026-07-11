import { type ReactElement } from 'react';

import { type RGBBaseProps } from '@/components/RGB/RGBBaseProps.ts';
import { RGBLedGrid } from '@/components/RGB/RGBLedGrid.tsx';
import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

interface RGBTextProps extends RGBBaseProps {
  children: ReactElement;
  parentBackgroundClassName: string; /* Required for background color matching */
  ledIndicesMatrix: number[][];
}

export function RGBText({
  children,
  parentBackgroundClassName,
  ledIndicesMatrix,
  isUsingAlternative,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBTextProps): ReactElement {
  return (
    <div className="relative grid">
      <BackgroundColorMatchingFilterLayer
        parentBackgroundClassName={parentBackgroundClassName}
      >
        {children}
      </BackgroundColorMatchingFilterLayer>
      <BackgroundClipTextFilterLayer>{children}</BackgroundClipTextFilterLayer>
      <BackdropBlurLayer />
      <RGBLedGridLayer
        ledIndicesMatrix={ledIndicesMatrix}
        isUsingAlternative={isUsingAlternative}
        preferredNormalFallbackColor={preferredNormalFallbackColor}
        preferredAlternativeFallbackColor={preferredAlternativeFallbackColor}
      />
    </div>
  );
}

function BackgroundColorMatchingFilterLayer({
  children,
  parentBackgroundClassName,
}: {
  children: ReactElement;
  parentBackgroundClassName: string;
}): ReactElement {
  return (
    <div
      className={new ClassNameJoiner().join(
        'relative z-3 col-span-full row-span-full text-black mix-blend-screen',
        parentBackgroundClassName,
      )}
    >
      {children}
    </div>
  );
}

function BackgroundClipTextFilterLayer({
  children,
}: {
  children: ReactElement;
}): ReactElement {
  return (
    <div
      className="relative z-2 col-span-full row-span-full bg-black text-white mix-blend-multiply"
      aria-hidden={true}
    >
      {children}
    </div>
  );
}

function BackdropBlurLayer(): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-(--component-rgb-diffuser-background-color) backdrop-blur-(--component-rgb-diffuser-blur-length)" />
  );
}

interface RGBLedGridLayerProps extends RGBBaseProps {
  ledIndicesMatrix: number[][];
}

function RGBLedGridLayer({
  ledIndicesMatrix,
  isUsingAlternative,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBLedGridLayerProps): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
      <RGBLedGrid
        ledIndicesMatrix={ledIndicesMatrix}
        isUsingAlternative={isUsingAlternative}
        preferredNormalFallbackColor={preferredNormalFallbackColor}
        preferredAlternativeFallbackColor={preferredAlternativeFallbackColor}
      />
    </div>
  );
}
