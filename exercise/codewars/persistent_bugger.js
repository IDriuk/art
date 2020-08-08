// Persistent Bugger.
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let count = 0
  while (num > 9) {
    num = ('' + num).split('').reduce( (a, b) => a * b)
    count++
  }
  return count
}