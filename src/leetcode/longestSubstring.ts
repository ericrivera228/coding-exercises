/**
 * Finds the longest substring without repeating characters
 */
export function lengthOfLongestSubstring(s: string): number {

  if(s.length === 0){
    return 0;
  }

  const splitString = s.split('');

  let maxSubstring = splitString[0];

  for(let outerCounter = 0; outerCounter < splitString.length - 1; outerCounter++){

    let currentSubstring = splitString[outerCounter];

    for(let innerCounter = outerCounter + 1; innerCounter < splitString.length; innerCounter++) {

      if(!currentSubstring.includes(splitString[innerCounter])){
        currentSubstring = currentSubstring + splitString[innerCounter];
      } else {
        break;
      }

    }

    if(currentSubstring.length > maxSubstring.length){
      maxSubstring = currentSubstring;
    }
    
  }

  return maxSubstring.length;
}