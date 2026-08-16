import { type ReactElement } from 'react';

import { IconName } from '@/assets/_constants/IconName.ts';
import { UIIcon } from '@/assets/icons/UIIcon.tsx';
import { useHoverContext } from '@/contexts/local/hover-context/useHoverContext.tsx';
import { ClassNameJoiner } from '@/utils/ClassNameJoiner.ts';

export function PrimaryButtonLikeIcon({
  iconName,
}: {
  iconName: IconName;
}): ReactElement {
  const { isHovered } = useHoverContext();

  return (
    <div
      className={new ClassNameJoiner().join(
        'text-6 mx-0.5',
        isHovered &&
          'text-(--theme-component-primary-button-icon-color--normal)',
        !isHovered &&
          'text-(--theme-component-primary-button-icon-color--hover)',
      )}
      aria-hidden={true}
    >
      <UIIcon iconName={iconName} />
    </div>
  );
}
