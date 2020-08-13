// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if ( n <= 9 && n >= 0 ) return n
  let sign = n > 0 ? '' : '-'
  let str = '' + n
  str = sign + str.replace('-', '').replace(/0+$/, '').split('').reverse().join('')
  return parseInt(str)
}

module.exports = reverseInt;
