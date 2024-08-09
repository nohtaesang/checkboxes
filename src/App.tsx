import { useMemo } from 'react';
import './App.css';
import { generateColorList } from './utils/generateList';
import { CheckboxList } from './components/CheckboxList';

const CHECKBOX_SIZE = 40;
const CHECKBOX_COUNT = 10;

function App() {
  const list = useMemo(() => {
    return generateColorList(CHECKBOX_COUNT);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
      }}
    >
      <CheckboxList checkboxSize={CHECKBOX_SIZE} checkboxList={list} />
    </div>
  );
}

export default App;
