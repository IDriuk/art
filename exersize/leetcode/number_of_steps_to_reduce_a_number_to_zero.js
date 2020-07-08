/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  let steps = 0
  
  while (num) {
    num = num % 2 == 0 ? num / 2 : num - 1
    steps++
  }
  
  return steps
};