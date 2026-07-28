import { type ReactElement } from 'react';

import { useDomRefsContext } from '@/contexts/global/dom-refs/useDomRefsContext.tsx';
import { useRectSize } from '@/hooks/useRectSize.tsx';

export function NonFixedHeaderPlaceholder(): ReactElement {
  const { headerRef } = useDomRefsContext();

  const { height: headerHeight } = useRectSize(headerRef);

  return <div style={{ height: headerHeight }} />;
}
