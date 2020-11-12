// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s == "") { return 0 }
  
  let max = 0
  let hash = {}
  let q = []
  let ar = s.split('')
  
  for (let el of ar) {
      if (hash[el]) {
          let letter
          while (letter != el ) {
              letter = q.shift()
              delete hash[letter]
          }
      }
      hash[el] = true
      q.push(el)
      max = q.length > max ? q.length : max
  }
  
  return max
};

/*
public class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length(), ans = 0;
        Map<Character, Integer> map = new HashMap<>(); // current index of character
        // try to extend the range [i, j]
        for (int j = 0, i = 0; j < n; j++) {
            if (map.containsKey(s.charAt(j))) {
                i = Math.max(map.get(s.charAt(j)), i);
            }
            ans = Math.max(ans, j - i + 1);
            map.put(s.charAt(j), j + 1);
        }
        return ans;
    }
}
*/