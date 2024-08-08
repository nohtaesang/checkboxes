import { Checkbox } from './Checkbox';

type CheckboxListProps = {
  checkboxSize: number;
  checkboxCount: number;
};
export function CheckboxList({ checkboxSize, checkboxCount }: CheckboxListProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Array.from({ length: checkboxCount }).map((_, index) => (
        <Checkbox key={index} size={checkboxSize} index={index} />
      ))}
    </div>
  );
}
