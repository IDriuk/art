// Best Time to Buy and Sell Stock with Cooldown
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let n = prices.length;
  if(n == 0) return 0;
  let stock = -prices[0];
  let money = 0;
  let prev_money = 0;
  for(let i = 1; i < n; i++){
    stock = Math.max(stock, prev_money - prices[i]);
    prev_money = money;
    money = Math.max(stock + prices[i], money);
  }
  return money;
};

/* var maxProfit = function(prices) {
  if (prices.length < 2) {
      return 0
  } 
    
  let cools = []
  let times = []
  let len = prices.length
  let i = 0
  let sliceStart = 0
  let coolIndex = false
  
  while ( i < len) {
      let min = prices[i]
      
      while (min > prices[i + 1]) {
          min = prices[i + 1]
          i++
      }
      
      sliceStart = i
      i++

      if (coolIndex && sliceStart > coolIndex) {
        cools.push([...times])
        times = []
      }

      let max = prices[i]
      
      while (max < prices[i + 1]) {
          max = prices[i + 1]
          i++
      }
      
      i++
      let t = prices.slice(sliceStart, i)
      if (t.length > 1) {
        times.push(t)
      }
      coolIndex = i
  }
  cools.push([...times])

  let profit  = cools.reduce( (ac, times) => {
    return ac + count(0, times)
  }, 0)

  return profit
  
  function count(profit, times) {
    if (times.length <= 0) {
      return profit
    } else if (times.length == 1) {
      let [ t ] = times
      let dif = t[t.length - 1] - t[0]
      dif = dif >= 0 ? dif : 0
      profit += dif
      return profit
    } else {
      let [t1, t2] = times.splice(0, 2)
        
      let lProfit = profit + t1[t1.length - 2] - t1[0]
      times.unshift(t2)
      lProfit = count(lProfit, times)
      times.shift()

      let rProfit = profit + t1[t1.length - 1] - t1[0]
      if (t2.length > 2) { times.unshift(t2.slice(1)) }
      rProfit = count(rProfit, times)
      if (t2.length > 2) { times.shift() }

      times.unshift([...t1, ...t2])
      let mProfit = count(profit, times)
      times.shift()

      profit = Math.max(lProfit, rProfit, mProfit)

      times.unshift(t2)
      times.unshift(t1)

      return profit
    }
  }
}; */