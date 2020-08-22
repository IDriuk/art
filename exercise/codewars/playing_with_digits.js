// Playing with digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p){
  let pows =  `${n}`
    .split('')
    .map( (v, i) => Math.pow(v, i + p))
    .reduce((ac, v) => ac + v, 0)
  
  return pows % n == 0 ? pows / n : -1
}