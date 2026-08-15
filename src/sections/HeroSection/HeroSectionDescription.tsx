import { type ReactElement } from 'react';

import { useHeroContentDataQuery } from '@/contexts/remote/hero-content/useHeroContentDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function HeroSectionDescription(): ReactElement {
  const { language } = useLanguageContext();
  const { description } = useHeroContentDataQuery({
    contentLanguageCode: language,
  });
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-hero-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionDescription.createMatrix()}
      preferredNormalFallbackColor="var(--theme-component-hero-section-description-text-color)"
    >
      <p className="text-6 max-w-224 font-light">{description}</p>
    </RGBText>
  );
}
