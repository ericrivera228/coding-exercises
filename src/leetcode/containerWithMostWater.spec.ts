import { maxArea } from './containerWithMostWater';

it('containerWithMostWater', () => {
  expect(maxArea([ 1, 8, 6, 2, 5, 4, 8, 3, 7 ])).toEqual(49);
  expect(maxArea([ 1, 1 ])).toEqual(1);
  expect(maxArea([ 12 ])).toEqual(0);
  expect(maxArea([ 0 ])).toEqual(0);
  expect(maxArea([ 8, 4, 4, 4, 8 ])).toEqual(32);
  expect(maxArea([ 1, 1, 1, 10, 10 ])).toEqual(10);
  expect(maxArea([ 21, 21, 1, 2, 3 ])).toEqual(21);
  expect(maxArea([ 11, 1, 1, 2, 3 ])).toEqual(12);
});