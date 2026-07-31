import type { ReactElement } from 'react';

import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function DeveloperName(): ReactElement {
  const [language] = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });
  const { rgbLedIndicesMatrixGenerators } = useThemeContext();

  rgbLedIndicesMatrixGenerators.developerName.reset();
  const indicesMatrix = rgbLedIndicesMatrixGenerators.developerName.generate();

  return (
    <RGBText
      parentBackgroundClassName="bg-(--component-header-background-color)"
      rgbLedIndicesMatrix={indicesMatrix}
      isUsingAlternative={false}
      preferredNormalFallbackColor="var(--component-developer-name-text-color)"
    >
      <p className="text-4 font-semibold uppercase">{developer.name}</p>
    </RGBText>
  );
}
