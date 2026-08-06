import { type ReactElement, useState } from 'react';

import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

export function DeveloperName(): ReactElement {
  const { language } = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });
  const { rgbLedIndicesMatrixGenerators } = useThemeContext();

  const [isHovered, setIsHovered] = useState(false);

  rgbLedIndicesMatrixGenerators.developerName.reset();
  const indicesMatrix = rgbLedIndicesMatrixGenerators.developerName.generate();

  return (
    <RGBText
      parentBackgroundClassName="bg-(--theme-component-header-background-color)"
      rgbLedIndicesMatrix={indicesMatrix}
      isUsingAlternativeColors={isHovered}
      preferredNormalFallbackColor="var(--theme-component-developer-name-text-color)"
      preferredAlternativeFallbackColor="var(--theme-component-developer-name-text-color--hover)"
      onPointerEnter={setIsHovered.bind(null, true)}
      onPointerLeave={setIsHovered.bind(null, false)}
    >
      <p className="text-4 font-semibold uppercase">{developer.name}</p>
    </RGBText>
  );
}
