import { useRef } from 'react';
import { Handler } from './Handler';
import { Checkbox } from './Checkbox';
import { ColorItem } from '../utils/generateList';

type CheckboxListProps = {
  checkboxSize: number;
  checkboxList: ColorItem[];
};

export function CheckboxList({ checkboxSize, checkboxList }: CheckboxListProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickGo = (inputValue: string) => {};

  const handleClickCheckbox = (index: number) => {};

  return (
    <div style={containerStyle}>
      <Handler onClickGo={handleClickGo} />
      <div ref={ref} style={checkboxContainerStyle}>
        {checkboxList.map(({ index, color }) => (
          <Checkbox
            key={index}
            size={checkboxSize}
            index={index}
            color={color || 'black'}
            focused={false}
            onClick={() => handleClickCheckbox(index)}
          />
        ))}
      </div>
    </div>
  );
}

// 스타일 객체들을 분리하여 재사용 가능하도록 설정합니다.
const containerStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
};

const checkboxContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  flex: 1,
  overflow: 'overlay',
  border: '1px solid #ccc',
};
