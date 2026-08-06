import type { ReactElement } from 'react';

import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function DeveloperJobTitle(): ReactElement {
  const { language } = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });
  const { rgbLedIndicesMatrixGenerators } = useThemeContext();

  rgbLedIndicesMatrixGenerators.developerJobTitle.reset();
  const rgbIndicesMatrix =
    rgbLedIndicesMatrixGenerators.developerJobTitle.generate();

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-header-background-color)"
      rgbLedIndicesMatrix={rgbIndicesMatrix}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-developer-job-title-text-color)"
    >
      <p className="text-4 font-normal capitalize">{developer.jobTitle}</p>
    </RGBText>
  );
}
