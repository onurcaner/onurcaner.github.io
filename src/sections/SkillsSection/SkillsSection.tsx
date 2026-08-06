import { type ReactElement } from 'react';

import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';

import { SectionHeading } from '../_components/SectionHeading.tsx';

import { SkillsList } from './SkillsList.tsx';

export function SkillsSection(): ReactElement {
  const { rgbLedIndicesMatrixGenerators } = useThemeContext();

  rgbLedIndicesMatrixGenerators.skillsSectionHeading.reset();
  const headingRGBLedIndicesMatrix =
    rgbLedIndicesMatrixGenerators.skillsSectionHeading.generate();

  return (
    <section className="relative z-0 grid min-h-screen items-center py-20">
      <div className="justify-self-start">
        <SectionHeading rgbLedIndicesMatrix={headingRGBLedIndicesMatrix}>
          Skills
        </SectionHeading>
      </div>

      <SkillsList />
    </section>
  );
}
