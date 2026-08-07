import { type ReactElement } from 'react';
import { RiBox3Fill } from 'react-icons/ri';
import { RiGraduationCapFill } from 'react-icons/ri';

import { IconName } from '@/assets/_constants/IconName.ts';

export function UIIcon({ iconName }: { iconName: IconName }): ReactElement {
  switch (iconName) {
    case IconName.Box: {
      return (
        <RiBox3Fill className="-m-[calc((128/114.24-1)*(114.24/128)*0.5em)] text-[calc(128/114.24*1em)]" />
      );
    }

    case IconName.GraduationCap: {
      return <RiGraduationCapFill />;
    }
  }

  throw new Error();
}
