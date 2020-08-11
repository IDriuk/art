// Counting Duplicates
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
  const chars = text.toLowerCase().split('')
  const set = {}
  
  for ( let char of chars) {
    if (!set[char]) {
      set[char] = 1
    } else {
      set[char]++
    }
  }
  
  let count = 0
  for ( let c of Object.values(set) ) {
    if ( c > 1 ) {
      count++
    }
  } 
  
  return count
}