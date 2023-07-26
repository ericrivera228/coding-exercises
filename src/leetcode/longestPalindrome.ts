export function longestPalindrome(s: string): string {

  if(s.length <= 1){
    return s;
  }

  let maxPalindrome = s[0];

  for(let outerCounter = 0; outerCounter < s.length - 1; outerCounter++) {

    let substring = s[outerCounter];
    
    for(let innerCounter = outerCounter + 1; innerCounter < s.length; innerCounter++) {
      substring = substring + s[innerCounter];

      if(isPalindrome(substring) && substring.length > maxPalindrome.length){
        maxPalindrome = substring;
      }
    }
  }

  return maxPalindrome;

}

export function isPalindrome(strCandidate: string): boolean {

  let reverseString = '';

  for(let counter = strCandidate.length - 1; counter >= 0; counter--){
    reverseString = reverseString + strCandidate[counter];
  }

  return reverseString === strCandidate;
}