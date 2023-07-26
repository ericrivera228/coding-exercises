import { longestPalindrome, isPalindrome } from './longestPalindrome';

describe('longestPalindrome', () => {
  it('works as expected', () => {
    expect(longestPalindrome('')).toBe('');
    expect(longestPalindrome('s')).toBe('s');
    expect(longestPalindrome('racecar')).toBe('racecar');
    expect(longestPalindrome('babad')).toBe('bab');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(longestPalindrome('tesw')).toBe('t');
    expect(longestPalindrome('levels')).toBe('level');
    expect(longestPalindrome('slevel')).toBe('level');
    expect(longestPalindrome('bb')).toBe('bb');
  });
  
  // it('isPalindrome', () => {
  //   expect(isPalindrome('a')).toBeTruthy();
  //   expect(isPalindrome('fa')).toBeFalsy();
  //   expect(isPalindrome('level')).toBeTruthy();
  //   expect(isPalindrome('abccba')).toBeTruthy();
  // });
});