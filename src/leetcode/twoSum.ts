export function twoSum(nums: number[], target: number): number[] {

  for(let outerCounter = 0; outerCounter < nums.length - 1; outerCounter++){

    for(let innerCounter = outerCounter + 1; innerCounter < nums.length; innerCounter++){

      if(nums[outerCounter] + nums[innerCounter] === target){

        return [ outerCounter, innerCounter ];
      
      }
    
    }
  
  }
  return [ -1, -1 ];

}