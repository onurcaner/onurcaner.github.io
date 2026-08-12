import { type ReactElement } from 'react';

import { useCallToActionContentDataQuery } from '@/contexts/remote/call-to-action-content/useCallToActionContentDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function CallToActionSectionDescription(): ReactElement {
  const { language } = useLanguageContext();
  const { description } = useCallToActionContentDataQuery({
    contentLanguageCode: language,
  });
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <RGBText
      parentBackgroundColor="var(--theme-component-call-to-action-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.callToActionSectionDescription.createMatrix()}
      isUsingAlternativeColors={false}
      preferredNormalFallbackColor="var(--theme-component-call-to-action-section-description-text-color)"
    >
      <p className="text-5 max-w-192 font-light">{description}</p>
    </RGBText>
  );
}
