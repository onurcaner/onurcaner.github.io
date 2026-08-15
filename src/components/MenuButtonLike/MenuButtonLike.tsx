import { type ReactElement, type ReactNode } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { HoverContextProvider } from '@/contexts/local/hover-context/HoverContextProvider.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { type RGBLedIndex } from '@/features/rgb/_types/RGBLedIndex.ts';
import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

import { MenuButtonLikeIcon } from './MenuButtonLikeIcon.tsx';
import { MenuButtonLikeLabel } from './MenuButtonLikeLabel.tsx';

interface MenuButtonLikeProps {
  children: ReactNode;
  iconName?: IconName;
  isActive: boolean;
  iconRGBLedIndicesMatrix?: RGBLedIndex[][];
  textRGBLedIndicesMatrix: RGBLedIndex[][];
}

export function MenuButtonLike(props: MenuButtonLikeProps): ReactElement {
  return (
    <HoverContextProvider>
      <Button {...props} />
    </HoverContextProvider>
  );
}

// Wrap by <Link> or <Button>
export function Button({
  children,
  iconName,
  isActive,
  iconRGBLedIndicesMatrix,
  textRGBLedIndicesMatrix,
}: MenuButtonLikeProps): ReactElement {
  const { isHovered, onPointerEnter, onPointerLeave } = useHoverContext();

  const hasIconAndMatrix = iconName && iconRGBLedIndicesMatrix;

  return (
    <div
      className={new ClassNameJoiner().join(
        'grid items-center rounded-(--theme-border-radius) px-4 py-1.5 transition-colors duration-(--theme-transition-duration) ease-(--theme-transition-timing-function-ease-out)',
        isHovered &&
          'bg-(--theme-component-menu-button-background-color--hover)',
        !isHovered &&
          'bg-(--theme-component-menu-button-background-color--normal)',
        hasIconAndMatrix && 'grid-cols-[max-content_1fr] gap-x-2',
      )}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {hasIconAndMatrix && (
        <MenuButtonLikeIcon
          isUsingAlternativeColors={isActive || isHovered}
          iconName={iconName}
          rgbLedIndicesMatrix={iconRGBLedIndicesMatrix}
        />
      )}

      <MenuButtonLikeLabel
        isUsingAlternativeColors={isActive || isHovered}
        rgbLedIndicesMatrix={textRGBLedIndicesMatrix}
      >
        {children}
      </MenuButtonLikeLabel>
    </div>
  );
}
