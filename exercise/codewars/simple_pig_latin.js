// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  return str.replace(/\w+/g, (v) => {
    let ar = v.split('')
    let first = ar.shift()
    ar.push(first)
    return ar.join('') + 'ay'
  })
}

/* 
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

function pigIt(str){
  //Code here
  return str.replace(/\b(\w)(\w*)\b/g,"$2$1ay");
}

const pigIt = s => s.replace(/(\w)(\w*)/g, '\$2\$1ay');
*/