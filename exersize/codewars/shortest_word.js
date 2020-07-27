// Shortest word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
  return s.split(' ').map( s => s.length).reduce((ac, val) => Math.min(ac, val), Infinity)
}