import React from 'react';
import { DEFAULT_COLOR } from '../utils/generateList';

interface CheckboxProps {
  size: number;
  index: number;
  color: string;
  focused: boolean;
  onClick: (nextChecked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ size, index, color, focused, onClick }) => {
  const checkboxSize = (size * 3) / 5;
  const isDefaultColor = color === DEFAULT_COLOR;

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    onClick(!(e.target as HTMLInputElement).checked);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    backgroundColor: !focused ? 'transparent' : 'rgba(0, 255, 255, 0.3)',
    position: 'relative', // Ensure the background div positions correctly
  };

  const checkboxStyle: React.CSSProperties = {
    width: checkboxSize,
    height: checkboxSize,
    zIndex: 1,
  };

  const backgroundStyle: React.CSSProperties = {
    position: 'absolute',
    width: checkboxSize + 9,
    height: checkboxSize + 9,
    borderRadius: 4,
    backgroundColor: isDefaultColor ? 'transparent' : color,
  };

  return (
    <div style={containerStyle}>
      <input type="checkbox" id={`checkbox-${index}`} style={checkboxStyle} onClick={handleCheckboxClick} />
      <div style={backgroundStyle} />
    </div>
  );
};
