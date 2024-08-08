import { useEffect, useMemo, useRef, useState } from 'react';
import { Checkbox } from './Checkbox';

type CheckboxListProps = {
  checkboxSize: number;
  checkboxList: {
    index: number;
    value: boolean;
    color: string | null;
  }[];
};
export function CheckboxList({ checkboxSize, checkboxList }: CheckboxListProps) {
  const checkboxCount = checkboxList.length;
  const [width, setWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = Math.floor(window.innerWidth / checkboxSize) * checkboxSize;
      if (newWidth !== width) {
        setWidth(newWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [checkboxSize, width]);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current?.getBoundingClientRect().top || 0;

      setScrollPosition(-top);
    };

    window?.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const height = useMemo(() => {
    return Math.ceil(checkboxCount / (width / checkboxSize)) * checkboxSize;
  }, [checkboxCount, checkboxSize, width]);

  const { startDivIndex, endDivIndex } = useMemo(() => {
    const res = calculateVisibleIndices(scrollPosition, window.innerHeight, width, checkboxSize, checkboxCount);
    return res;
  }, [scrollPosition, width, checkboxSize, checkboxCount]);

  return (
    <div style={{ position: 'relative', width, height }} ref={ref}>
      {checkboxList.slice(startDivIndex, endDivIndex + 1).map((checkbox) => {
        const index = checkbox.index;
        const col = index % (width / checkboxSize);
        const row = Math.floor(index / (width / checkboxSize));
        const top = row * checkboxSize;
        const left = col * checkboxSize;
        return (
          <Checkbox
            key={index}
            col={col}
            row={row}
            top={top}
            left={left}
            size={checkboxSize}
            index={index}
            color={checkbox.color}
          />
        );
      })}
    </div>
  );
}

const calculateVisibleIndices = (
  scrollTop: number,
  windowHeight: number,
  width: number,
  divWidth: number,
  n: number
) => {
  // 한 행에 배치할 수 있는 최대 정사각형의 수
  const maxSquaresPerRow = Math.floor(width / divWidth);

  // 현재 스크롤 위치에서 보이는 첫 번째 div의 행
  const startRow = Math.floor(scrollTop / divWidth);

  // 현재 스크롤 위치에서 보이는 마지막 div의 행
  const endRow = Math.floor((scrollTop + windowHeight) / divWidth);

  // 각 행에서 첫 번째 div와 마지막 div의 인덱스를 계산
  const startDivIndex = startRow * maxSquaresPerRow;
  const endDivIndex = Math.min(n, (endRow + 1) * maxSquaresPerRow) - 1;

  return { startDivIndex, endDivIndex };
};
