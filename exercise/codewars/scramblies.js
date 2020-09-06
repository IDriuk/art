// Scramblies
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  let s1 = str1.split('')
  let s2 = str2.split('')
  
  let map = {}
  
  for ( let el of s1) {
    map[el] = map[el] ? map[el] + 1 : 1  
  }
  
  for (let el of s2) {
    if ( !map[el] ) {
      return false
    } else {
      map[el]--
    }
  }
  
  return true
  
}