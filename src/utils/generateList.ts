const PROBABILITY = 0.01;
export const COLOR_LIST = ['black', 'red', 'green', 'blue'];
export const DEFAULT_COLOR = COLOR_LIST[0];

export type ColorItem = {
  index: number;
  color: string;
};

export function generateColorList(count: number): ColorItem[] {
  return Array.from({ length: count }, (_, index) => ({
    index,
    color: getRandomColor(DEFAULT_COLOR),
  }));
}

function getRandomColor(defaultColor: string) {
  if (Math.random() < PROBABILITY) {
    return COLOR_LIST.filter((color) => color !== defaultColor)[Math.floor(Math.random() * (COLOR_LIST.length - 1))];
  }

  return defaultColor;
}
