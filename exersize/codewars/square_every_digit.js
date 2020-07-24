// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript

function squareDigits(num){
  let result = []
  while (num) {
    let digit = num % 10
    num = ~~(num / 10)
    result.unshift(`${digit * digit}`) 
  }
  return +result.join('')
}

/* 
  function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join('')); 
  }
*/