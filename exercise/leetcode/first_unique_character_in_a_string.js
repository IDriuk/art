// First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let chars = s.split('')
  let set = {}
  
  for ( let i = 0; i < chars.length; i++) {
      if (!set[chars[i]] && set[chars[i]] != 0) {
          set[chars[i]] = i
      } else {
          set[chars[i]] = 'R'
      }
  }
  
  let min = chars.length
  for ( let i of Object.values(set) ) {
      
      if (i != 'R' && i < min) {
          min = i
      }
  }
  
  return min == chars.length ? -1 : min
};

/*
class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> count = new HashMap<Character, Integer>();
        int n = s.length();
        // build hash map : character and how often it appears
        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        
        // find the index
        for (int i = 0; i < n; i++) {
            if (count.get(s.charAt(i)) == 1) 
                return i;
        }
        return -1;
    }
} 
*/