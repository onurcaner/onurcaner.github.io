import { useMotionValueEvent } from 'motion/react';
import { type ReactElement, type ReactNode, useState } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import type { SectionName } from '@/constants/SectionName.ts';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { SectionLink } from '@/router/components/SectionLink.tsx';

import { MenuButtonLike } from '../MenuButtonLike/MenuButtonLike.tsx';

export function SideNavigationItem({
  iconName,
  sectionName,
  children,
  itemIndex,
}: {
  iconName: IconName;
  sectionName: SectionName;
  children: ReactNode;
  itemIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();
  const { activeSectionNameMotionValue } = useScrollSpyContext();

  // Hooks - Local State
  const [isActive, setIsActive] = useState(
    () => activeSectionNameMotionValue.get() === sectionName,
  );

  // Motion Hooks - Subscription
  useMotionValueEvent(
    activeSectionNameMotionValue,
    'change',
    (activeSectionName) => {
      setIsActive(activeSectionName === sectionName);
    },
  );

  // Derived States
  const iconRGBLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.sectionSideNavigationLinkIcon.createMatrix({
      waterfallCount: itemIndex,
    });
  const labelRGBLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.sectionSideNavigationLinkText.createMatrix({
      waterfallCount: itemIndex,
    });

  return (
    <li>
      <SectionLink sectionName={sectionName}>
        <MenuButtonLike
          isActive={isActive}
          iconName={iconName}
          iconRGBLedIndicesMatrix={iconRGBLedIndicesMatrix}
          textRGBLedIndicesMatrix={labelRGBLedIndicesMatrix}
        >
          {children}
        </MenuButtonLike>
      </SectionLink>
    </li>
  );
}
