import { type ReactElement } from 'react';
import { Link } from 'react-router';

import { IconName } from '@/assets/_constants/IconName.ts';
import { MenuButtonLike } from '@/components/MenuButtonLike/MenuButtonLike.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function SectionNavigationItem({
  iconName,
  label,
  isActive,
  itemIndex,
}: {
  iconName: IconName;
  label: string;
  isActive: boolean;
  itemIndex: number;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

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
      <Link to="">
        <MenuButtonLike
          isActive={isActive}
          iconName={iconName}
          iconRGBLedIndicesMatrix={iconRGBLedIndicesMatrix}
          textRGBLedIndicesMatrix={labelRGBLedIndicesMatrix}
        >
          {label}
        </MenuButtonLike>
      </Link>
    </li>
  );
}
