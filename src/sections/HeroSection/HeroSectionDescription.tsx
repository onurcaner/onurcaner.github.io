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

  const rgbLedIndicesMatrix =
    rgbLedIndicesMatrixCreators.heroSectionDescription.createMatrix({
      waterfallIndex: 0,
    });

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-hero-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-hero-section-description-text-color)"
    >
      <p className="text-5 max-w-[40em] font-light">{description}</p>
    </RGBText>
  );
}
