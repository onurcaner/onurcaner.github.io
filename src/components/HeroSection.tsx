import { type ReactElement, type RefObject } from 'react';

import { NonFixedHeaderPlaceholder } from '@/components/NonFixedHeaderPlaceholder.tsx';
import { useElementsRefContext } from '@/contexts/global/ref/useElementsRefContext.tsx';
import { useHeroContentDataQuery } from '@/contexts/remote/hero-content/useHeroContentDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';

export function HeroSection(): ReactElement {
  const { heroSectionRef } = useElementsRefContext();
  const [language] = useLanguageContext();
  const { title, description } = useHeroContentDataQuery({
    contentLanguageCode: language,
  });

  return (
    <div
      ref={heroSectionRef as RefObject<HTMLDivElement>}
      className="grid min-h-screen grid-rows-[max-content_1fr] bg-neutral-800 px-16 py-20"
    >
      <NonFixedHeaderPlaceholder />
      <div className="">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}
