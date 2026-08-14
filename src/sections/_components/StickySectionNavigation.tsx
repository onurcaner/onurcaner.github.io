import { useMotionValueEvent } from 'motion/react';
import { type ReactElement, useRef, useState } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { SectionName } from '@/constants/SectionName.ts';
import { useScrollSpyContext } from '@/features/scroll-spy/contexts/useScrollSpyContext.tsx';
import { useRectSize } from '@/hooks/useRectSize.tsx';
import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

export function StickySectionNavigation(): ReactElement {
  // Hooks - Elevated States
  const { activeSectionNameMotionValue } = useScrollSpyContext();

  // Hooks - Local States
  const navRef = useRef<HTMLElement>(null);
  const { height } = useRectSize(navRef);
  const [activeSectionName, setActiveSectionName] =
    useState<SectionName | null>(null);

  // Motion Hooks - Elevated to Local State Synchronisation
  useMotionValueEvent(
    activeSectionNameMotionValue,
    'change',
    (activeSectionName) => {
      setActiveSectionName(activeSectionName);
    },
  );

  return (
    <nav
      ref={navRef}
      className="sticky top-1/2 z-0 -translate-y-1/2 rounded-(--theme-border-radius) border-2 border-neutral-700 bg-neutral-800 px-16 py-20 font-medium"
      style={{
        marginTop: typeof height === 'number' ? height / 2 : undefined,
        marginBottom: typeof height === 'number' ? -height / 2 : undefined,
      }}
    >
      <ul className="grid gap-y-1.5">
        <StickySectionNavigationItem
          iconName={IconName.Box}
          label="Skills"
          isActive={activeSectionName === SectionName.Skills}
        />
        <StickySectionNavigationItem
          iconName={IconName.GraduationCap}
          label="Education"
          isActive={activeSectionName === SectionName.Education}
        />
        <StickySectionNavigationItem
          iconName={IconName.BriefCase}
          label="Experience"
          isActive={activeSectionName === SectionName.Experience}
        />
      </ul>
    </nav>
  );
}

function StickySectionNavigationItem({
  iconName,
  label,
  isActive,
}: {
  iconName: IconName;
  label: string;
  isActive: boolean;
}): ReactElement {
  return (
    <li className="flex items-center gap-x-2">
      <div
        className={new ClassNameJoiner().join(
          'text-4-5 font-normal uppercase',
          !isActive && 'text-pink-400',
          isActive && 'text-pink-300',
        )}
      >
        <UIIcon iconName={iconName} />
      </div>
      <p
        className={new ClassNameJoiner().join(
          'text-4 font-normal uppercase',
          !isActive && 'text-pink-300',
          isActive && 'text-pink-200',
        )}
      >
        {label}
      </p>
    </li>
  );
}
