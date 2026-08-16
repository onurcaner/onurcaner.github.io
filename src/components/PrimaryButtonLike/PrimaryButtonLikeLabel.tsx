import { type ReactElement, type ReactNode } from 'react';

import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

export function PrimaryButtonLikeLabel({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <div
      className={new ClassNameJoiner().join(
        'text-5 font-semibold capitalize',
        isHovered &&
          'text-(--theme-component-primary-button-label-color--normal)',
        !isHovered &&
          'text-(--theme-component-primary-button-label-color--hover)',
      )}
    >
      {children}
    </div>
  );
}
