import { type ReactElement } from 'react';

import { useSkillsDataQuery } from '@/contexts/remote/skill/useSkillsDataQuery.tsx';
import { useLanguageContext } from '@/contexts/url/language/useLanguageContext.tsx';
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

  return (
    <ul className="relative z-0 grid grid-cols-3 gap-x-16 gap-y-20">
      {skills.map((skill, i) => (
        <SkillItem key={skill.id} skill={skill} index={i} />
      ))}
    </ul>
  );
}
