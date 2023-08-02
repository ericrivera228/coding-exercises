export function maxArea(height: number[]): number {

  if(height.length <= 1){
    return 0;
  }
    
  let maxArea = 0;

  for(let leftBoundCounter = 0; leftBoundCounter <= height.length - 2; leftBoundCounter++){

    for(let rightBoundCounter = leftBoundCounter + 1; rightBoundCounter <= height.length - 1; rightBoundCounter++){

      const minHeight = Math.min(height[leftBoundCounter], height[rightBoundCounter]);
      const width = rightBoundCounter - leftBoundCounter;

      const area = minHeight * width;

      if(area > maxArea){
        maxArea = area;
      }

    }

  }

  return maxArea;

}