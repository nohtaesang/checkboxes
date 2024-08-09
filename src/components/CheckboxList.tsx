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

  // TODO: Implement handleClickJump
  const handleClickJump = (inputValue: string) => {};

  // TODO: Implement handleClickCheckbox
  const handleClickCheckbox = (index: number) => {};

  // TODO: Implement handleClickDrawDiamond (Optional)
  const handleClickDrawDiamond = () => {};

  return (
    <div style={containerStyle}>
      <Handler onClickJump={handleClickJump} onClickDrawDiamond={handleClickDrawDiamond} />
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
