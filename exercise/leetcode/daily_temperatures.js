// Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/submissions/

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let stack = [[T[0], 0]]
  let res = []
  
  for ( let i = 1; i < T.length; i++) {
      let t = T[i]
      for ( let j = stack.length - 1; j >= 0; j--) {
          let [v, index] = stack[j]
          if (t > v) {
              stack.pop()
              res[index] = i - index
          } else { 
              break
          }
      }
      stack.push([T[i], i])
  }
  
  for ( let i = 0; i < stack.length; i++ ) {
      let [v, index] = stack[i]
      res[index] = 0
  }
  
  return res
};