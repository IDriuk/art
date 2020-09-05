// Product of consecutive Fib numbers
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod){
  let fibs = [0, 1]
  
  while (true) {
    let last = fibs.length - 1
    let m = fibs[last] * fibs[last - 1]
    if (m == prod) {
      return [fibs[last -1], fibs[last], true]
    } else if (m > prod) {
      return [fibs[last -1], fibs[last], false]
    }
    
    fibs.push(fibs[last] + fibs[last - 1])
  }
}

/*
function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}  
*/