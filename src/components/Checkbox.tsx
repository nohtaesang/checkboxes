import React from 'react';

interface CheckboxProps {
  size: number;
  index: number;
  col: number;
  row: number;
  top: number;
  left: number;
  color: string | null;
}

export const Checkbox: React.FC<CheckboxProps> = ({ size, index, col, row, color, top, left }) => {
  const checkboxSize = (size * 3) / 5;
  return (
    <div
      style={{
        position: 'absolute',
        top,
        left,
        minWidth: size,
        maxWidth: size,
        minHeight: size,
        maxHeight: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        style={{
          width: checkboxSize,
          height: checkboxSize,
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'absolute',
          width: checkboxSize + 5,
          height: checkboxSize + 5,
          background: color || 'transparent',
          borderRadius: 4,
          boxSizing: 'border-box',
          zIndex: 0,
        }}
      />
    </div>
  );
};
