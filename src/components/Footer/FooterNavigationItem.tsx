import { type ReactElement, type ReactNode, useState } from 'react';

import { SectionName } from '@/constants/SectionName.ts';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { SectionLink } from '@/router/components/SectionLink.tsx';

export function FooterNavigationItem({
  itemIndex,
  sectionName,
  children,
}: {
  itemIndex: number;
  sectionName: SectionName;
  children: ReactNode;
}): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  // Hooks - Local States
  const [isHovered, setIsHovered] = useState(false);

  // Derived States
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.footerNavigationLink.createMatrix({
      waterfallCount: itemIndex,
    });

  return (
    <li>
      <SectionLink
        className=""
        sectionName={sectionName}
        onPointerEnter={setIsHovered.bind(null, true)}
        onPointerLeave={setIsHovered.bind(null, false)}
      >
        <RGBText
          parentBackgroundColor="var(--theme-component-footer-background-color)"
          rgbLedIndicesMatrix={rgbLedIndicesMatrix}
          isUsingAlternativeColors={isHovered}
          preferredNormalFallbackColor="var(--theme-component-footer-navigation-link-text-color--normal)"
          preferredAlternativeFallbackColor="var(--theme-component-footer-navigation-link-text-color--hover)"
        >
          <div className="text-4 font-normal uppercase">{children}</div>
        </RGBText>
      </SectionLink>
    </li>
  );
}
