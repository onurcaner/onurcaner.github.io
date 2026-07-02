import {
  type CSSProperties,
  type RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

export function useRectSize(
  ref: RefObject<HTMLElement | null>,
): Pick<CSSProperties, 'width' | 'height'> {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const handler = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setWidth(rect.width);
    setHeight(rect.height);
  }, [ref]);

  useEffect(handler, [handler]);

  useEffect(() => {
    const onResize = handler;
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [handler]);

  return { width, height };
}
