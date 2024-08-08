import { useMemo, useState } from 'react';
import './App.css';
import { CheckboxList } from './components/CheckboxList';

function App() {
  const [checkboxSize, setCheckboxSize] = useState(40);
  const [checkboxCount, setCheckboxCount] = useState(100000);
  const list = useMemo(() => {
    return generateList(checkboxCount);
  }, [checkboxCount]);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CheckboxList checkboxSize={checkboxSize} checkboxList={list} />
    </div>
  );
}

export default App;

function generateList(count: number) {
  const list: { index: number; value: boolean; color: string | null }[] = [];
  const colors = ['red', 'green', 'blue'];

  for (let i = 0; i < count; i++) {
    let color = null;
    if (Math.random() < 0.01) {
      // 1% 확률로 color를 선택
      color = colors[Math.floor(Math.random() * colors.length)];
    }
    list.push({
      index: i,
      value: false,
      color: color,
    });
  }

  return list;
}
