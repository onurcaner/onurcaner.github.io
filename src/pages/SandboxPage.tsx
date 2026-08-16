import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';

export function SandboxPage(): ReactElement {
  // const lorem =
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  //
  // const lor = 'Lorem';

  return (
    <div className="grid bg-neutral-900 p-16">
      <div className="text-32 text-neutral-100">
        <UIIcon iconName={IconName.Rocket} />
      </div>
    </div>
  );
}
