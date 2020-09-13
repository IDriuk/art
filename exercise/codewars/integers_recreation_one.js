// Integers: Recreation One
// https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

function listSquared(m, n) {
  let res = []
  for (let i = m; i <= n; i++) {
    let count = 0
    for (let j = 1; j <= i; j++) {
      if ( !(i % j) ) {
        count += j * j
      }
    }
    if (Number.isInteger(Math.sqrt(count))) {
      res.push([i, count])
    }
  }
  return res
}