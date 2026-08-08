import { type ReactElement } from 'react';

import { type SkillClientData } from '@/services/skill/types/SkillClientData.ts';

import { SkillCard } from './SkillCard.tsx';

export function SkillItem({
  skill,
  index,
}: {
  skill: SkillClientData;
  index: number;
}): ReactElement {
  return (
    <li className="grid">
      <SkillCard skill={skill} index={index} />
    </li>
  );
}
