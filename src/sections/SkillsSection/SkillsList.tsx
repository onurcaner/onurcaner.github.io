import { type ReactElement } from 'react';

import { useSkillsDataQuery } from '@/contexts/remote/skill/useSkillsDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
import { useThemeContext } from '@/features/theme/contexts/useThemeContext.tsx';
import { SkillCategory } from '@/services/skill/constants/SkillCategory.ts';

import { SkillItem } from './SkillItem.tsx';

export function SkillsList(): ReactElement {
  const { language } = useLanguageContext();
  const skills = useSkillsDataQuery({
    contentLanguageCode: language,
    associatedSkillCategories: [
      SkillCategory.Frontend,
      SkillCategory.Backend,
      SkillCategory.Testing,
    ],
  });
  const { rgbLedIndicesMatrixGenerators } = useThemeContext();

  rgbLedIndicesMatrixGenerators.skillBorder.reset();
  rgbLedIndicesMatrixGenerators.skillIcon.reset();
  rgbLedIndicesMatrixGenerators.skillLabel.reset();
  const skillBorderRGBLedIndicesMatrices = skills.map(() =>
    rgbLedIndicesMatrixGenerators.skillBorder.generate(),
  );
  const skillIconRGBLedIndicesMatrices = skills.map(() =>
    rgbLedIndicesMatrixGenerators.skillIcon.generate(),
  );
  const skillLabelRGBLedIndicesMatrices = skills.map(() =>
    rgbLedIndicesMatrixGenerators.skillLabel.generate(),
  );

  return (
    <ul className="relative z-0 grid grid-cols-4 gap-x-16 gap-y-20">
      {skills.map((skill, i) => (
        <SkillItem
          key={skill.id}
          skillData={skill}
          borderRGBLedIndicesMatrix={skillBorderRGBLedIndicesMatrices[i]}
          iconRGBLedIndicesMatrix={skillIconRGBLedIndicesMatrices[i]}
          labelRGBLedIndicesMatrix={skillLabelRGBLedIndicesMatrices[i]}
        />
      ))}
    </ul>
  );
}
