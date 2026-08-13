import { type ReactElement } from 'react';

import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

import { DeveloperJobTitle } from './DeveloperJobTitle.tsx';
import { DeveloperName } from './DeveloperName.tsx';

export function Developer({
  isHorizontal,
  isVertical,
}: {
  isVertical?: true;
  isHorizontal?: true;
}): ReactElement {
  if (isHorizontal === isVertical) throw new Error();

  return (
    <div
      className={new ClassNameJoiner().join(
        'relative',
        isHorizontal && 'flex items-center gap-x-4',
        isVertical && 'grid',
      )}
    >
      <DeveloperName />
      <DeveloperJobTitle />
    </div>
  );
}
