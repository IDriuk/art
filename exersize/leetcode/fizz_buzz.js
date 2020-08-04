// Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = []
  let i = 1
  
  while ( i <= n ) {
      let val = ""
      if (!(i % 3)) {
          val += "Fizz"
      }
      if (!(i % 5)) {
          val += "Buzz"
      }

      result.push(val || "" + i)
      
      i++
  }
  
  return result
};