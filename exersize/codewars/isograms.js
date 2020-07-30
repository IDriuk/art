// Isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
  let letters = str.toLowerCase().split('')
  const countHash = {}
  for ( let i = 0; i < letters.length; i++) {
    if (countHash[letters[i]]) { 
      return false
    } else {
      countHash[letters[i]] = true
    }
  }
  return true
}