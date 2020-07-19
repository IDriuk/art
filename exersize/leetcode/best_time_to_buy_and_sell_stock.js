// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/
// Best Time to Buy and Sell Stock  

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0
  for ( let i = 0; i < prices.length - 1; i++) {
      for ( let j = i + 1; j < prices.length; j++) {
          let profit = prices[j] - prices[i]
          if ( profit > max ) {
              max = profit
          }
      }
  }
  
  return max
};

/* tricky solution
  public int maxProfit(int prices[]) {
      int minprice = Integer.MAX_VALUE;
      int maxprofit = 0;
      for (int i = 0; i < prices.length; i++) {
          if (prices[i] < minprice)
              minprice = prices[i];
          else if (prices[i] - minprice > maxprofit)
              maxprofit = prices[i] - minprice;
      }
      return maxprofit;
  }
*/