import { zigZagConvesion } from './zigZagConversion';

it('zigZagConversion', () => {
  // expect(zigZagConvesion('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  // expect(zigZagConvesion('A', 1)).toEqual('A');
  // expect(zigZagConvesion('', 1)).toEqual('');
  // expect(zigZagConvesion('AB', 1)).toEqual('AB');
  // expect(zigZagConvesion('AB', 3)).toEqual('AB');
  expect(zigZagConvesion('ABCD', 2)).toEqual('ACDB');
});