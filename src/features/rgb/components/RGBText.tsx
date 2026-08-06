import {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactElement,
} from 'react';

import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

import { type RGBBaseComponentProps } from '../_types/RGBBaseComponentProps.ts';
import { type RGBLedIndex } from '../_types/RGBLedIndex.ts';

import { RGBLedGrid } from './RGBLedGrid.tsx';

type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface RGBTextProps
  extends RGBBaseComponentProps, Omit<ReactDivProps, 'className'> {
  children: ReactElement;
  parentBackgroundClassName: string; /* Required for background color matching */
  rgbLedIndicesMatrix: RGBLedIndex[][];
}

export function RGBText({
  children,
  parentBackgroundClassName,
  rgbLedIndicesMatrix,
  isUsingAlternativeColors,
  preferredNormalFallbackColor,
  preferredAlternativeFallbackColor,
  ...restProps
}: RGBTextProps): ReactElement {
  return (
    <div {...restProps} className="relative z-0 grid">
      <BackgroundColorMatchingFilterLayer
        parentBackgroundClassName={parentBackgroundClassName}
      >
        {children}
      </BackgroundColorMatchingFilterLayer>
      <BackgroundClipTextFilterLayer>{children}</BackgroundClipTextFilterLayer>
      <BackdropBlurLayer />
      <RGBLedGridLayer
        rgbLedIndicesMatrix={rgbLedIndicesMatrix}
        isUsingAlternativeColors={isUsingAlternativeColors}
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
