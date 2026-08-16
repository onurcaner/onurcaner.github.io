import { type MouseEventHandler, type ReactElement } from 'react';
import { Link, type LinkProps, useLocation } from 'react-router';

import { SectionName } from '@/constants/SectionName.ts';

import { RoutePath } from '../constants/RoutePath.ts';

interface SectionLinkProps extends Omit<LinkProps, 'to' | 'replace'> {
  sectionName: SectionName;
}

export function SectionLink({
  sectionName,
  children,
  onClick,
  ...restProps
}: SectionLinkProps): ReactElement {
  // Hooks - Elevated States
  const location = useLocation();

  // Derived States
  const hash = ((): string | undefined => {
    const scrollableSectionNames = [
      SectionName.Skills,
      SectionName.Education,
      SectionName.Experience,
      SectionName.CallToAction,
    ];
    if (scrollableSectionNames.includes(sectionName)) return `#${sectionName}`;
    else return undefined;
  })();

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);
    if (sectionName === SectionName.Hero) {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    if (!hash) return;

    document.querySelector(hash)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <Link
      to={{
        pathname: RoutePath.Resume,
        search: location.search,
        hash: hash,
      }}
      replace={true}
      onClick={handleClick}
      {...restProps}
    >
      {children}
    </Link>
  );
}
