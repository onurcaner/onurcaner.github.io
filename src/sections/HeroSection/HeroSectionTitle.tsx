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

  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.heroSectionTitle.createMatrix({
      waterfallIndex: 0,
    });

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-hero-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-hero-section-title-text-color)"
    >
      <h1 className="text-16 mb-6 font-extrabold uppercase">{title}</h1>
    </RGBText>
  );
}
