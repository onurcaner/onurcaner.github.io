import type { ReactElement } from 'react';

import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeControllerContext } from '@/features/theme/contexts/useThemeControllerContext.ts';

export function DeveloperJobTitle(): ReactElement {
  const [language] = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });
  const { rgbLedIndicesMatricesMap } = useThemeControllerContext();

  rgbLedIndicesMatricesMap.developerJobTitle.reset();
  const rgbIndicesMatrix = rgbLedIndicesMatricesMap.developerName.generate();

  return (
    <RGBText
      parentBackgroundClassName="bg-(--component-header-background-color)"
      rgbLedIndicesMatrix={rgbIndicesMatrix}
      isUsingAlternative={false}
      preferredNormalFallbackColor="var(--component-developer-job-title-text-color)"
    >
      <p className="text-4 font-normal capitalize">{developer.jobTitle}</p>
    </RGBText>
  );
}
