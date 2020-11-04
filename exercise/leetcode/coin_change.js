// Coin Change
// https://leetcode.com/problems/coin-change/

var coinChange = function(coins, amount) {
  let max = amount + 1
  let dp = new Array(max).fill(max)
  dp[0] = 0
    
  for ( let i = 1; i <= amount; i++ ) {
      for  ( let c of coins ) {
          if (c <= i) {
              dp[i] = Math.min(dp[i], dp[i - c] + 1)
          }
      }
  }
    
  return dp[amount] > amount ? -1 : dp[amount]
};

/* 
var coinChange = function(coins, amount) {
  if (amount == 0) { return 0 }
  
  let sumsLen = amount + 1
  let prev = Array(sumsLen).fill(false)
  let cur = Array(sumsLen).fill(false)
  let i = 1
  prev[0] = true
  
  while (i < sumsLen) {
      for (let j = 1; j < sumsLen; j++) {
          for (let c of coins) {
              if (prev[j - c]) {
                  cur[j] = true
              }
          }
      }
      if (cur[amount]) {
        return i
      }
      prev = [...cur]
      i++
  }
  
  return -1
}; 
*/