// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

/* 
  You are climbing a stair case. It takes n steps to reach to the top.
  Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if ( n == 1 ) {
      return 1
  }
  
  let results = []
  results[1] = 1
  results[2] = 2
  
  for ( let i = 3; i <= n; i++) {
      results[i] = results[i - 1] + results[i - 2]
  }
  
  return results[n]
  
};

/* 
public class Solution {
    public int climbStairs(int n) {
        int memo[] = new int[n + 1];
        return climb_Stairs(0, n, memo);
    }
    public int climb_Stairs(int i, int n, int memo[]) {
        if (i > n) {
            return 0;
        }
        if (i == n) {
            return 1;
        }
        if (memo[i] > 0) {
            return memo[i];
        }
        memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
        return memo[i];
    }
}
*/

/* 
public class Solution {
    public int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}
*/
