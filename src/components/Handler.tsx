import { useState } from 'react';
import { COLOR_LIST } from '../utils/generateList';

type HandlerProps = {
  checkedCount?: Record<string, number>;
  onClickJump: (inputValue: string) => void;
  onClickDrawDiamond: () => void;
};
export function Handler({ checkedCount, onClickJump, onClickDrawDiamond }: HandlerProps) {
  const [inputValue, setInputValue] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <div style={{ display: 'flex', gap: 12 }}>
        checked count:
        {COLOR_LIST.map((color) => renderCheckedCount(color, checkedCount?.[color] || 0))}
      </div>
      <div
        style={{
          display: 'flex',
          gap: 4,
        }}
      >
        checkbox index:
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onClickJump(inputValue);
            }
          }}
        />
        <button
          onClick={() => {
            onClickJump(inputValue);
          }}
        >
          Jump
        </button>
      </div>
      <button onClick={onClickDrawDiamond}>draw diamond</button>
    </div>
  );
}

function renderCheckedCount(color: string, count: number) {
  return (
    <div
      key={color}
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      [
      <div
        style={{
          width: '7px',
          height: '7px',
          backgroundColor: color,
          borderRadius: '50%',
        }}
      />
      {count}]
    </div>
  );
}
