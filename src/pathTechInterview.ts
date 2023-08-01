export function transition(currentState: boolean[][]): boolean[][]{
  for(let rowCounter = 0; rowCounter < currentState.length; rowCounter++){

    const row = currentState[rowCounter];

    for(let nodeCounter = 0; nodeCounter < row.length; nodeCounter++){

      let aliveNeighbors = 0;

      // Check the neighbor above
      let rowIndex = rowCounter - 1;
      let nodeIndex = nodeCounter;

      if(checkIndex(currentState, rowIndex, nodeIndex) && currentState[rowIndex][nodeIndex]){
        aliveNeighbors = aliveNeighbors + 1;
      }

      // Check the neighbor below
      rowIndex = rowCounter + 1;
      nodeIndex = nodeCounter;

      if(checkIndex(currentState, rowIndex, nodeIndex) && currentState[rowIndex][nodeIndex]){
        aliveNeighbors = aliveNeighbors + 1;
      }

      // Check the neighbor to the right
      rowIndex = rowCounter;
      nodeIndex = nodeCounter + 1;

      if(checkIndex(currentState, rowIndex, nodeIndex) && currentState[rowIndex][nodeIndex]){
        aliveNeighbors = aliveNeighbors + 1;
      }

      // Check the neighbor to the left
      rowIndex = rowCounter;
      nodeIndex = nodeCounter - 1;

      if(checkIndex(currentState, rowIndex, nodeIndex) && currentState[rowIndex][nodeIndex]){
        aliveNeighbors = aliveNeighbors + 1;
      }

      // Check the neighbor to the top-right
      rowIndex = rowCounter - 1;
      nodeIndex = nodeCounter + 1;

      if(checkIndex(currentState, rowIndex, nodeIndex) && currentState[rowIndex][nodeIndex]){
        aliveNeighbors = aliveNeighbors + 1;
      }

      // Check the neighbor to the top-right
      // rowIndex = rowCounter - 1;
      // nodeIndex = nodeCounter + 1;

      // if(checkIndex(currentState, rowIndex, nodeIndex) && currentState[rowIndex][nodeIndex]){
      //   aliveNeighbors = aliveNeighbors + 1;
      // }

    }

  }

  return [ [] ];
}

function checkIndex(grid: boolean[][], rowIndex: number, nodeIndex: number){
  return true;
}