// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  let bSet = b.reduce( (ac, el) => (ac[el] = true, ac), {})
  
  return a.filter( el => !bSet[el])
}