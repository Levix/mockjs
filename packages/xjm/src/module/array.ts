import { number } from './number';

export const array = (length: number, min: number, max: number) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    const num = number(min, max);
    arr.push(num);
  }
  return arr;
}
