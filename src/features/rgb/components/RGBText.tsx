import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

import { type RGBBaseComponentProps } from '../_types/RGBBaseComponentProps.ts';
import { type RGBLedIndex } from '../_types/RGBLedIndex.ts';

import { RGBLedGrid } from './RGBLedGrid.tsx';

type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface RGBTextProps extends RGBBaseComponentProps, ReactDivProps {
  children: ReactElement;
  parentBackgroundColor: string; /* Required for background color matching */
  rgbLedIndicesMatrix: RGBLedIndex[][];
}

export function RGBText({
  children,
  parentBackgroundColor,
  rgbLedIndicesMatrix,
  isUsingAlternativeColors,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
  ...restProps
}: RGBTextProps): ReactElement {
  return (
    <div {...restProps}>
      <div className="relative z-0 grid h-full w-full">
        <BackgroundColorMatchingFilterLayer
          parentBackgroundColor={parentBackgroundColor}
        >
          {children}
        </BackgroundColorMatchingFilterLayer>
        <BackgroundClipTextFilterLayer>
          {children}
        </BackgroundClipTextFilterLayer>
        <BackdropBlurLayer />
        <RGBLedGridLayer
          rgbLedIndicesMatrix={rgbLedIndicesMatrix}
          isUsingAlternativeColors={isUsingAlternativeColors}
          preferredNormalFallbackColor={preferredNormalFallbackColor}
          preferredAlternativeFallbackColor={preferredAlternativeFallbackColor}
        />
      </div>
    </div>
  );
}

function BackgroundColorMatchingFilterLayer({
  children,
  parentBackgroundColor,
}: {
  children: ReactElement;
  parentBackgroundColor: string;
}): ReactElement {
  return (
    <div
      className="relative z-3 col-span-full row-span-full text-black mix-blend-screen"
      style={{
        backgroundColor: parentBackgroundColor,
      }}
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
      className="pointer-events-none relative z-2 col-span-full row-span-full bg-black text-white mix-blend-multiply"
      aria-hidden={true}
      aria-disabled={true}
    >
      {children}
    </div>
  );
}

function BackdropBlurLayer(): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-1 bg-(--theme-component-rgb-diffuser-color) backdrop-blur-(--theme-component-rgb-diffuser-blur-length)" />
  );
}

interface RGBLedGridLayerProps extends RGBBaseComponentProps {
  rgbLedIndicesMatrix: RGBLedIndex[][];
}

function RGBLedGridLayer({
  rgbLedIndicesMatrix,
  isUsingAlternativeColors,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
}: RGBLedGridLayerProps): ReactElement {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 z-0 grid">
      <RGBLedGrid
        rgbLedIndicesMatrix={rgbLedIndicesMatrix}
        isUsingAlternativeColors={isUsingAlternativeColors}
        preferredNormalFallbackColor={preferredNormalFallbackColor}
        preferredAlternativeFallbackColor={preferredAlternativeFallbackColor}
      />
    </div>
  );
}
