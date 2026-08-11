import {
  type CSSProperties,
  type RefObject,
  useCallback,
  useEffect,
  useState,
} from 'react';

export function useRectSizeRemNoEvent(
  ref: RefObject<HTMLElement | null>,
): Pick<CSSProperties, 'width' | 'height'> {
  const [width, setWidth] = useState<CSSProperties['width']>('0rem');
  const [height, setHeight] = useState<CSSProperties['height']>('0rem');

  const refreshStates = useCallback(
    (ref: RefObject<HTMLElement | null | undefined>) => {
      if (!ref.current) return;
      const rem = Number.parseFloat(
        window.getComputedStyle(document.documentElement).fontSize,
      );
      const rect = ref.current.getBoundingClientRect();

      setWidth(rect.width / rem);
      setHeight(rect.height / rem);
    },
    [],
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    refreshStates(ref);
  }, [ref, refreshStates]);

  return { width, height };
}
