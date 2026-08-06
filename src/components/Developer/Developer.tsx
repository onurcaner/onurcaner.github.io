import { type ReactElement } from 'react';

import { DeveloperJobTitle } from './DeveloperJobTitle.tsx';
import { DeveloperName } from './DeveloperName.tsx';

export function Developer(): ReactElement {
  return (
    <div className="relative z-0 flex items-center gap-x-4">
      <DeveloperName />
      <DeveloperJobTitle />
    </div>
  );
}
