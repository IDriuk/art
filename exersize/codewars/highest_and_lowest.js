// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// Highest and Lowest

function highAndLow(numbers){
  let digits = numbers.split(' ').map( x => +x)
  return `${Math.max(...digits)} ${Math.min(...digits)}`
}