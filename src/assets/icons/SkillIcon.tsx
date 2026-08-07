import { type ReactElement } from 'react';
import { FaCss3Alt, FaHtml5, FaReact, FaSass } from 'react-icons/fa6';
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { SkillName } from '@/services/skill/constants/SkillName.ts';

export function SkillIcon({
  skillName,
}: {
  skillName: SkillName;
}): ReactElement {
  switch (skillName) {
    case SkillName.CSS: {
      return (
        <FaCss3Alt className="-m-[calc((128/112-1)*(112/128)*0.5em)] text-[calc(128/112*1em)]" />
      );
    }

    case SkillName.Git: {
      return <SiGit />;
    }

    case SkillName.HTML: {
      return (
        <FaHtml5 className="-m-[calc((128/112-1)*(112/128)*0.5em)] text-[calc(128/112*1em)]" />
      );
    }

    case SkillName.JavaScript: {
      return <SiJavascript />;
    }

    case SkillName.NextJs: {
      return <SiNextdotjs />;
    }

    case SkillName.React: {
      return <FaReact />;
    }

    case SkillName.SASS: {
      return <FaSass />;
    }

    case SkillName.TailwindCSS: {
      return <SiTailwindcss />;
    }

    case SkillName.TypeScript: {
      return <SiTypescript />;
    }
  }

  throw new Error();
}
