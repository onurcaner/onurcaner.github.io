import { type ReactElement, type ReactNode } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { ElevationStep } from '@/constants/ElevationSteps.ts';
import { HoverContextProvider } from '@/contexts/local/hover-context/HoverContextProvider.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { RGBBackground } from '@/features/rgb/components/RGBBackground.tsx';

import { BlurShadow } from '../BlurShadow.tsx';

import { PrimaryButtonLikeIcon } from './PrimaryButtonLikeIcon.tsx';
import { PrimaryButtonLikeLabel } from './PrimaryButtonLikeLabel.tsx';

interface PrimaryButtonLikeProps {
  children: ReactNode;
  leadingIconName?: IconName;
  trailingIconName?: IconName;
  rgbLedIndicesMatrix: RGBLedIndex[][];
}

// Wrap by <Link> or <Button>
export function PrimaryButtonLike(props: PrimaryButtonLikeProps): ReactElement {
  return (
    <HoverContextProvider>
      <Button {...props} />
    </HoverContextProvider>
  );
}

export function Button(props: PrimaryButtonLikeProps): ReactElement {
  const { onPointerEnter, onPointerLeave } = useHoverContext();

  return (
    <div
      className="relative cursor-pointer"
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <ButtonContentsLayer {...props} />
      <ButtonBackgroundLayer {...props} />
      <ButtonBorderLayer {...props} />
      <ButtonBlurShadowLayer {...props} />
    </div>
  );
}

function ButtonContentsLayer({
  children,
  leadingIconName,
  trailingIconName,
}: PrimaryButtonLikeProps): ReactElement {
  return (
    <div className="relative z-3 m-(--theme-border-thickness) flex items-center gap-x-4 px-8 py-5">
      {leadingIconName && <PrimaryButtonLikeIcon iconName={leadingIconName} />}
      <PrimaryButtonLikeLabel>{children}</PrimaryButtonLikeLabel>
      {trailingIconName && (
        <PrimaryButtonLikeIcon iconName={trailingIconName} />
      )}
    </div>
  );
}

function ButtonBackgroundLayer({
  rgbLedIndicesMatrix,
}: PrimaryButtonLikeProps): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <RGBBackground
      className="absolute top-(--theme-border-thickness) right-(--theme-border-thickness) bottom-(--theme-border-thickness) left-(--theme-border-thickness) z-2 overflow-hidden rounded-(--theme-border-radius)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-primary-button-background-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-primary-button-background-color--hover)"
    />
  );
}

function ButtonBorderLayer({
  rgbLedIndicesMatrix,
}: PrimaryButtonLikeProps): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <RGBBackground
      className="absolute top-0 right-0 bottom-0 left-0 z-1 overflow-hidden rounded-(--theme-border-radius)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-primary-button-border-color--normal)"
      preferredAlternativeFallbackColor="var(--theme-component-primary-button-border-color--hover)"
    />
  );
}

function ButtonBlurShadowLayer({
  rgbLedIndicesMatrix,
}: PrimaryButtonLikeProps): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <BlurShadow
      className="absolute top-0 right-0 bottom-0 left-0 z-0 grid overflow-hidden rounded-(--theme-border-radius)"
      elevationStep={ElevationStep.Button}
    >
      <RGBBackground
        rgbLedIndicesMatrix={rgbLedIndicesMatrix}
        isUsingAlternativeColors={isHovered}
        preferredNormalFallbackColor="var(--theme-component-primary-button-border-color--normal)"
        preferredAlternativeFallbackColor="var(--theme-component-primary-button-border-color--hover)"
      />
    </BlurShadow>
  );
}
