// Best Time to Buy and Sell Stock II
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const difs = []
  let min = prices[0]
  
  for ( let i = 1; i < prices.length; i++ ) {
      if (prices[i] < min) {
          min = prices[i]
      } else if (i == prices.length - 1) {
          difs.push(prices[i] - min)
      } else if ( prices[i+1] < prices[i]) {
          difs.push(prices[i] - min)
          min = prices[i+1]
      }
  }
  
  const sums = difs.reduce( (ac, val) => ac + val, 0)
  
  return sums && sums > 0 ? sums : 0
};

/*
class Solution {
    public int maxProfit(int[] prices) {
        int maxprofit = 0;
        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1])
                maxprofit += prices[i] - prices[i - 1];
        }
        return maxprofit;
    }
} 
*/