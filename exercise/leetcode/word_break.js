// Word Break
// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let len = s.length
  let table = Array(s.length + 1).fill(null).map( el => Array(s.length + 1).fill(false))
  
  table[0][len] = true
  
  for (let i = 1; i < len + 1; i++ ) {
      for (let j = 0; j < len + 1; j++) {
          let prev = table[i - 1][j]
          if (prev) {
              for (let w of wordDict) {
                  let wsub = s.substr(len - j, w.length)
                  if (w == wsub) {
                      let cur = j - w.length
                      if ( cur > 0) {
                          table[i][cur] = true 
                      } else if ( cur == 0) {
                          return true
                      }
                  }
              }   
          }
      }
  }
  
  return false
};

/*
public class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> wordDictSet=new HashSet(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordDictSet.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
}
*/