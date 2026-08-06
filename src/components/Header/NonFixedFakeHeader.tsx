import { type ReactElement } from 'react';

import { useDomRefsContext } from '@/contexts/global/dom-refs/contexts/useDomRefsContext.tsx';
import { useRectSize } from '@/hooks/useRectSize.tsx';

export function NonFixedFakeHeader(): ReactElement {
  const { headerRef } = useDomRefsContext();

  const { height: headerHeight } = useRectSize(headerRef);

  return <div style={{ height: headerHeight }} />;
}
