// Sum of Digits / Digital Root
// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  if ( n <= 9 ) return n

  let sum = `${n}`.split('').reduce( (a, b) => { return Number(a) + Number(b) })

  return digital_root(sum)
}