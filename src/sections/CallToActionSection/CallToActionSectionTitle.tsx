import { type ReactElement } from 'react';

import { useCallToActionContentDataQuery } from '@/contexts/remote/call-to-action-content/useCallToActionContentDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function CallToActionSectionTitle(): ReactElement {
  const { language } = useLanguageContext();
  const { title } = useCallToActionContentDataQuery({
    contentLanguageCode: language,
  });
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  return (
    <RGBText
      className="mb-6"
      parentBackgroundColor="var(--theme-component-call-to-action-section-background-color)"
      rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.callToActionSectionTitle.createMatrix()}
      preferredNormalFallbackColor="var(--theme-component-call-to-action-section-title-text-color)"
    >
      <h2 className="text-16 font-extrabold uppercase">{title}</h2>
    </RGBText>
  );
}
