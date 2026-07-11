import { type ReactElement } from 'react';

import { DeveloperJobTitle } from '@/components/Developer/DeveloperJobTitle.tsx';
import { DeveloperName } from '@/components/Developer/DeveloperName.tsx';

export function Developer(): ReactElement {
  return (
    <div className="flex items-center gap-x-4">
      <DeveloperName />
      <DeveloperJobTitle />
    </div>
  );
}
