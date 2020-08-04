// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
// Find Multiples of a Number

function findMultiples(integer, limit) {
  const result = []
  let mult = 1
  while (true) {
    let val = mult * integer
    if (val > limit) { break }
    result.push(val)
    mult++
  }
  return result
}
