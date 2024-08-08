import { useState } from 'react';
import './App.css';
import { CheckboxList } from './components/CheckboxList';

function App() {
  const [checkboxSize, setCheckboxSize] = useState(40);
  const [checkboxCount, setCheckboxCount] = useState(1000);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div>안녕하세요</div>
      <CheckboxList checkboxSize={checkboxSize} checkboxCount={checkboxCount} />
    </div>
  );
}

export default App;
