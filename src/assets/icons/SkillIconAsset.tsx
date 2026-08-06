import { type ReactElement } from 'react';
import { FaReact } from 'react-icons/fa6';

import { SkillName } from '@/services/skill/constants/SkillName.ts';

export function SkillIconAsset({
  skillName,
}: {
  skillName: SkillName;
}): ReactElement {
  // TODO
  return skillName === SkillName.React ? <FaReact /> : <FaReact className="" />;
}
