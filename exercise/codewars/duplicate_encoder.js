// Duplicate Encoder
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
  let w = word.toLowerCase().split('')
  let counts = {}
  for ( let l of w) {
    if (!counts[l]) {
      counts[l] = 1
    } else {
      counts[l]++
    }
  }

  let result = []
  
  for ( let l of w) {
    if (counts[l] > 1) {
      result.push(")")
    } else {
      result.push("(")
    }
  }

  return result.join('')
}