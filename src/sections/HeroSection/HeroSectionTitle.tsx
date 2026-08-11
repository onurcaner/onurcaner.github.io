import { type ReactElement } from 'react';

import { useHeroContentDataQuery } from '@/contexts/remote/hero-content/useHeroContentDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function HeroSectionTitle(): ReactElement {
  // Hooks - Elevated States
  const { language } = useLanguageContext();
  const { title } = useHeroContentDataQuery({
    contentLanguageCode: language,
  });
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <div className="mb-6">
      <RGBText
        parentBackgroundClassName="bg-(--theme-component-hero-section-background-color)"
        rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.heroSectionTitle.createMatrix()}
        isUsingAlternativeColors={false}
        preferredNormalFallbackColor="var(--theme-component-hero-section-title-text-color)"
      >
        <h1 className="text-16 font-extrabold uppercase">{title}</h1>
      </RGBText>
    </div>
  );
}
