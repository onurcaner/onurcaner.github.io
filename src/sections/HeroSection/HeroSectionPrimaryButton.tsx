import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { PrimaryButtonLike } from '@/components/PrimaryButtonLike/PrimaryButtonLike.tsx';
import { SectionName } from '@/constants/SectionName.ts';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function HeroSectionPrimaryButton(): ReactElement {
  // Hooks - Elevated States
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  const handleClick = (): void => {
    document.getElementById(SectionName.CallToAction)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <button className="relative z-1" onClick={handleClick}>
      <PrimaryButtonLike
        leadingIconName={IconName.Rocket}
        trailingIconName={IconName.Rocket}
        rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionPrimaryButton.createMatrix()}
      >
        Umamazing
      </PrimaryButtonLike>
    </button>
  );
}
