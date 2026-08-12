import { type ReactElement } from 'react';

import { useHeroContentDataQuery } from '@/contexts/remote/hero-content/useHeroContentDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function HeroSectionTitle(): ReactElement {
  const { language } = useLanguageContext();
  const { title } = useHeroContentDataQuery({
    contentLanguageCode: language,
  });
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <RGBText
      className="mb-7"
      parentBackgroundColor="var(--theme-component-hero-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionTitle.createMatrix()}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-hero-section-title-text-color)"
    >
      <h1 className="text-18 font-extrabold uppercase">{title}</h1>
    </RGBText>
  );
}
