// Rot13
// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message){
  let al = "abcdefghijklm".split('')
  let ar = "nopqrstuvwxyz".split('')
  
  message = message.replace(/[a-z]/gi, v => {
    let letter = v.toLowerCase()
    let isUpper = letter != v
    let leftInd = al.indexOf(letter)
    let rightInd = ar.indexOf(letter)
    if (leftInd >= 0 ) {
      letter = ar[leftInd]
    } else {
      letter =al[rightInd]
    }
    
    return isUpper ? letter.toUpperCase() : letter
  })
  
  return message
}