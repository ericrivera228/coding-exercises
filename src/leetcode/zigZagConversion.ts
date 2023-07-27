export function zigZagConvesion(s: string, numRows: number): string {

  if(numRows === 1){
    return s;
  }

  let workingString = s;

  let lastUsedRow: number | undefined = undefined;

  const rows: string[][] = [];

  // Initialize the rows arrays
  for(let rowCounter = 0; rowCounter < numRows; rowCounter++){
    rows[rowCounter] = [];
  }

  while(workingString.length > 0){
    for(let rowCounter = 0; rowCounter < numRows; rowCounter++){
      if(workingString.length > 0){
        let row = rows[rowCounter];
        if(lastUsedRow === undefined){
          const letterToPlace = workingString.substring(0, 1);
          workingString = workingString.substring(1);
  
          row = [ ...row, letterToPlace ];
        } else {
  
          if(rowCounter === lastUsedRow - 1){
            const letterToPlace = workingString.substring(0, 1);
            workingString = workingString.substring(1);
  
            row = [ ...row, letterToPlace ];
            lastUsedRow = lastUsedRow - 1;
          } else{
            row = [ ...row, '' ];
          }
          
          
        }
        rows[rowCounter] = row;       
      }
    }

    if(lastUsedRow === undefined){
      lastUsedRow = numRows - 1;
    } else if(lastUsedRow === 1 || lastUsedRow === 0){
      lastUsedRow = undefined;
    }
  }

  let returnString = '';

  for(let rowCounter = 0; rowCounter < rows.length; rowCounter++){
    for(let nodeCounter = 0; nodeCounter < rows[rowCounter].length; nodeCounter++){
      returnString = returnString + rows[rowCounter][nodeCounter];
    }
  }

  return returnString;
}
