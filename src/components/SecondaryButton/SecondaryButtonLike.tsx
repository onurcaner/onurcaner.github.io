import { type ReactElement, type ReactNode } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { HoverContextProvider } from '@/contexts/local/hover-context/HoverContextProvider.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';
import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

import { BlurShadow } from '../BlurShadow.tsx';

import { SecondaryButtonLikeIcon } from './SecondaryButtonLikeIcon.tsx';
import { SecondaryButtonLikeLabel } from './SecondaryButtonLikeLabel.tsx';

export interface SecondaryButtonLikeProps {
  children: ReactNode;
  leadingIconName?: IconName;
  trailingIconName?: IconName;
  labelRGBLedIndicesMatrix: RGBLedIndex[][];
  leadingIconRGBLedIndicesMatrix?: RGBLedIndex[][];
  trailingIconRGBLedIndicesMatrix?: RGBLedIndex[][];
  borderRGBLedIndicesMatrix: RGBLedIndex[][];
}

// Wrap by <Link> or <Button>
export function SecondaryButtonLike(
  props: SecondaryButtonLikeProps,
): ReactElement {
  return (
    <HoverContextProvider>
      <Button {...props} />
    </HoverContextProvider>
  );
}

export function Button(props: SecondaryButtonLikeProps): ReactElement {
  const { onPointerEnter, onPointerLeave } = useHoverContext();

  return (
    <div
      className="relative cursor-pointer p-(--theme-border-thickness)"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <ButtonContentsLayer {...props} />
      <ButtonBorderLayer {...props} />
      <ButtonBlurShadowLayer {...props} />
    </div>
  );
}

function ButtonContentsLayer({
  children,
  leadingIconName,
  leadingIconRGBLedIndicesMatrix,
  trailingIconName,
  trailingIconRGBLedIndicesMatrix,
  labelRGBLedIndicesMatrix,
}: SecondaryButtonLikeProps): ReactElement {
  // Hooks - Elevated States
  const { isHovered } = useHoverContext();

  // Derived States
  const hasLeadingIcon = leadingIconName && leadingIconRGBLedIndicesMatrix;
  const hasTrailingIcon = trailingIconName && trailingIconRGBLedIndicesMatrix;

  return (
    <div
      className={new ClassNameJoiner().join(
        'relative z-2 flex items-center gap-x-4 rounded-(--theme-border-radius) px-8 py-5 transition-colors duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)',
        isHovered &&
          'bg-(--theme-component-secondary-button-background-color--hover)',
        !isHovered &&
          'bg-(--theme-component-secondary-button-background-color--normal)',
      )}
    >
      {hasLeadingIcon && (
        <SecondaryButtonLikeIcon
          iconName={leadingIconName}
          rgbLedIndicesMatrix={leadingIconRGBLedIndicesMatrix}
        />
      )}

      <SecondaryButtonLikeLabel rgbLedIndicesMatrix={labelRGBLedIndicesMatrix}>
        {children}
      </SecondaryButtonLikeLabel>

      {hasTrailingIcon && (
        <SecondaryButtonLikeIcon
          iconName={trailingIconName}
          rgbLedIndicesMatrix={trailingIconRGBLedIndicesMatrix}
        />
      )}
    </div>
  );
}

function ButtonBorderLayer({
  borderRGBLedIndicesMatrix,
}: SecondaryButtonLikeProps): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <RGBBackground
      className="absolute top-0 right-0 bottom-0 left-0 z-1 overflow-hidden rounded-(--theme-border-radius)"
      rgbLedIndicesMatrix={borderRGBLedIndicesMatrix}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-secondary-button-border-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-secondary-button-border-color--hover)"
    />
  );
}

function ButtonBlurShadowLayer({
  borderRGBLedIndicesMatrix,
}: SecondaryButtonLikeProps): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <BlurShadow
      className="absolute top-0 right-0 bottom-0 left-0 z-0 grid overflow-hidden rounded-(--theme-border-radius)"
      elevationStep={ElevationStep.Button}
    >
      <RGBBackground
        rgbLedIndicesMatrix={borderRGBLedIndicesMatrix}
        isUsingAlternativeColors={isHovered}
        preferredNormalFallbackColor="var(--theme-component-secondary-button-border-color--normal)"
        preferredAlternativeFallbackColor="var(--theme-component-secondary-button-border-color--hover)"
      />
    </BlurShadow>
  );
}
