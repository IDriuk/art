// Plus One
// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let ar = [...digits].reverse()
  let i = 0
  ar[0]++
  
  while (true){
      if (ar[i] == 10) {
          ar[i] = 0
          ar[i + 1] = ar[i + 1] ? ar[i + 1] + 1 : 1
          i++
      } else {
          break
      }
  }
  
  return ar.reverse()
};