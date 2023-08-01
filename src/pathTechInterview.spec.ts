import { transition } from './pathTechInterview';

it('pathTechInterview - test function', () => {
  
  /**
   * t time-step T+1, the following transitions occur
    Any live cell at time T with < 2 live neighbors dies (by underpopulation)
    Any live cell at time T  with exactly 2 or 3 live neighbors survives
    Any live cell at time T with > 3 live neighbors dies (by overpopulation)
    Any dead cell with exactly 3 live neighbors becomes alive (by reproduction)
   */

  /**
  * Input: 
  * Alive dead alive
  * Dead  dead alive
  * Alive alive dead
  */

  /*
  * Expected output
  * dead   alive   dead
  * alive  dead    alive
  * dead   alive   dead
  */

  const inputGrid: boolean[][] = [
    [ true, false, true ],
    [ false, false, true ],
    [ true, true, false ]
  ];

  const expectedOutput: boolean[][] = [
    [ false, true, false ],
    [ true, false, true ],
    [ false, true, false ]   
  ];

  expect(transition(inputGrid)).toEqual(expectedOutput);
  inputGrid[0];
});