import { lengthOfLongestSubstring } from './longestSubstring';

describe('lengthOfLongestSubstring', () => {
  it('works as expected', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
    expect(lengthOfLongestSubstring('abcdefghijkl')).toEqual(12);
    expect(lengthOfLongestSubstring('aaajkln')).toEqual(5);
    expect(lengthOfLongestSubstring('aatuvwxnn')).toEqual(7);
    expect(lengthOfLongestSubstring('')).toEqual(0);
    expect(lengthOfLongestSubstring('aa 1234 9')).toEqual(6);
  });
});