import { ArrayAdditionI } from './arrayAddition';

describe.only('array addition', () => {

  it('works as expected', () => {

    expect(ArrayAdditionI([ 4, 6, 23, 10, 1, 3 ])).toBeTruthy();
    expect(ArrayAdditionI([ 5,7,16,1,2 ])).toBeFalsy();
    expect(ArrayAdditionI([ 3,5,-1,8,12 ])).toBeTruthy();
    expect(ArrayAdditionI([ 10,20,30,40,100 ])).toBeTruthy();
    expect(ArrayAdditionI([ 31,2,90,50,7 ])).toBeTruthy();
  
  });

});