import { minimumTotal } from './triangle';

it('Triangle - minimumTotal', () => {

  // 2 -> 3 -> 5 -> 1
  expect(minimumTotal([ [ 2 ], [ 3, 4 ], [ 6, 5, 7 ], [ 4, 1, 8, 3 ] ])).toEqual(11);

  expect(minimumTotal([ [ -10 ] ])).toEqual(-10);

  // // 2 -> 4 -> 7 -> 3
  expect(minimumTotal([ [ 2 ], [ 3, 4 ], [ 100, 100, 7 ], [ 4, 1, 8, 3 ] ])).toEqual(16);

  expect(minimumTotal([ [ 2 ], [ 3, 4 ], [ 7, 100, 100 ], [ 1, 4, 8, 3 ] ])).toEqual(13);
});