import { type ReactElement } from 'react';
import { FaBriefcase } from 'react-icons/fa6';
import {
  RiBox3Fill,
  RiGraduationCapFill,
  RiSubtractFill,
} from 'react-icons/ri';

import { IconName } from '../_constants/IconName.ts';

export function UIIcon({ iconName }: { iconName: IconName }): ReactElement {
  switch (iconName) {
    case IconName.Box: {
      return (
        <RiBox3Fill className="-m-[calc((128/114.24-1)*(114.24/128)*0.5em)] text-[calc(128/114.24*1em)]" />
      );
    }

    case IconName.BriefCase: {
      return <FaBriefcase />;
    }

    case IconName.GraduationCap: {
      return <RiGraduationCapFill />;
    }

    case IconName.Minus: {
      return (
        <RiSubtractFill className="-m-[calc((128/74.67-1)*(74.67/128)*0.5em)] text-[calc(128/74.67*1em)]" />
      );
    }
  }

  throw new Error();
}
