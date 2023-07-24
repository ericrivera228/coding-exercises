import { sum } from './wordCount';

describe('sum', => {
  it('2 + 2', () => {
    expect(sum(2, 2).toEqual(4))
  })
});