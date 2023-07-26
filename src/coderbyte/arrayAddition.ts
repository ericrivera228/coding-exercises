export function ArrayAdditionI(arr: number[]) { 

  // First time the maximum number in the array
  const max = Math.max(...arr);

  // Create a new array without the max in it
  const arrayWithoutMax = arr.filter(x => x !== max);

  for(let comboLengthCounter = 2; comboLengthCounter <= arrayWithoutMax.length; comboLengthCounter++) {

    let indices = [];

    for(let counter = 0; counter < comboLengthCounter; counter++){

      indices.push(0);
    
    }

    while(indices[0] != -1){

      indices = arrayIncrementer(indices, arrayWithoutMax.length);

      // If there are duplicates, move on
      if(checkArrayForDuplicates(indices)){

        // arrayIncrementer(indices, arrayWithoutMax.length);
        continue;
      
      }

      let sum = 0;

      for(let sumCounter = 0; sumCounter < indices.length; sumCounter++) {

        sum = sum + arrayWithoutMax[indices[sumCounter]];
      
      }

      if(sum === max){

        return true;
      
      }

    }
  
  }

  return false; 

}

function arrayIncrementer(indexArray: number[], base: number): number[] {

  const newIndexArray = [ ...indexArray ];
  let lastIndex = indexArray.length - 1;

  while(true){

    if(newIndexArray[lastIndex] < base){

      newIndexArray[lastIndex] = newIndexArray[lastIndex] + 1;
      return newIndexArray;
  
    } else {
  
      newIndexArray[lastIndex] = 0;
      lastIndex = lastIndex - 1;
  
    }

    if(lastIndex === -1){

      return [ -1 ];
    
    }
  
  }

}

function checkArrayForDuplicates(arr: number[]){

  for(let outerIndexCounter = 0; outerIndexCounter <= arr.length - 2; outerIndexCounter++){

    const value = arr[outerIndexCounter];

    for(let innerIndexCounter = outerIndexCounter + 1; innerIndexCounter <= arr.length - 1; innerIndexCounter++){

      if(arr[innerIndexCounter] === value){

        return true;
      
      }
    
    }
  
  }

  return false;

}