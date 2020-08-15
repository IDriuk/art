// Happy Number
// https://leetcode.com/problems/happy-number/submissions/

var isHappy = function(n) {
  let set = {}

  function checkHappy(num) {
      num = `${num}`.split('').reduce( (a, v) => a + v * v, 0)
      
      if (set[num]) {
         return false
      } else {
         set[num] = true
      }
      
      return num == 1 ? true : checkHappy(num)
  }
  
  return checkHappy(n)
};