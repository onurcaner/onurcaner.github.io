import { type ReactElement, useState } from 'react';

import { SectionName } from '@/constants/SectionName.ts';
import { useDeveloperDataQuery } from '@/contexts/remote/developer/useDeveloperDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { RGBText } from '@/features/rgb/components/RGBText.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { SectionLink } from '@/router/components/SectionLink.tsx';

export function DeveloperName(): ReactElement {
  // Hooks - Elevated State
  const { language } = useLanguageContext();
  const developer = useDeveloperDataQuery({ contentLanguageCode: language });
  const { rgbLedIndicesMatrixCreators } = useThemeContext();

  // Hooks - Local State
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SectionLink
      sectionName={SectionName.Hero}
      onPointerEnter={setIsHovered.bind(null, true)}
      onPointerLeave={setIsHovered.bind(null, false)}
    >
      <RGBText
        parentBackgroundColor="var(--theme-component-header-background-color)"
        rgbLedIndicesMatrix={rgbLedIndicesMatrixCreators.developerName.createMatrix()}
        isUsingAlternativeColors={isHovered}
        preferredNormalFallbackColor="var(--theme-component-developer-name-text-color)"
        preferredAlternativeFallbackColor="var(--theme-component-developer-name-text-color--hover)"
      >
        <div className="text-4-5 font-medium uppercase">{developer.name}</div>
      </RGBText>
    </SectionLink>
  );
}
