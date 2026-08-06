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
  const { rgbLedIndicesMatrixGenerators } = useThemeContext();

  rgbLedIndicesMatrixGenerators.heroSectionTitle.reset();
  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixGenerators.heroSectionTitle.generate();

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-hero-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-hero-section-title-text-color)"
    >
      <h1 className="text-16 mb-5 font-bold uppercase">{title}</h1>
    </RGBText>
  );
}
