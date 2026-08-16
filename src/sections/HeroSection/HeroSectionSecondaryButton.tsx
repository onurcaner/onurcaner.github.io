import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { SecondaryButtonLike } from '@/components/SecondaryButton/SecondaryButtonLike.tsx';
import { SectionName } from '@/constants/SectionName.ts';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function HeroSectionSecondaryButton(): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  const handleClick = (): void => {
    document.getElementById(SectionName.Skills)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <button className="relative z-1" onClick={handleClick}>
      <SecondaryButtonLike
        leadingIconName={IconName.ArrowDown}
        trailingIconName={IconName.ArrowDown}
        leadingIconRGBLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionSecondaryButtonLeadingIcon.createMatrix()}
        trailingIconRGBLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionSecondaryButtonTrailingIcon.createMatrix()}
        labelRGBLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionSecondaryButtonLabel.createMatrix()}
        borderRGBLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionSecondaryButtonBorder.createMatrix()}
      >
        About me
      </SecondaryButtonLike>
    </button>
  );
}
