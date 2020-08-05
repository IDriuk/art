// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  const counts = {}
  for ( let d of A) {
    counts[d] = counts[d] ? counts[d] + 1 : 1
  }
  return +Object.keys(counts).filter( i => counts[i] % 2)[0]
}

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);