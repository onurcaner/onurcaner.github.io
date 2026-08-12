import { type ReactElement } from 'react';

import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function DeveloperJobTitle(): ReactElement {
  const { language } = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-header-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.developerJobTitle.createMatrix()}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-developer-job-title-text-color)"
    >
      <p className="text-4 font-light capitalize">{developer.jobTitle}</p>
    </RGBText>
  );
}
