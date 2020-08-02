// Simple string reversal
// https://www.codewars.com/kata/5a71939d373c2e634200008e/train/javascript

function solve(str){
  let ar = []
  
  for ( let i = 0; i < str.length; i++) {
      ar[i] = str[i] == ' ' ? ' ' : ''
  }
  
  let letters = str.replace(/\s/g, '').split('')
  
  let i = letters.length;
  let j = 0
  
  
  while (i--) {
    if (ar[j] === ' ') {
      ar[j+1] = letters[i]
      j += 2
    } else {
      ar[j] = letters[i]
      j++
    }
  }
  
  let result = ar.join('') 
  
  return result
}

/* 
function solve(str)
{
  var s = "";
  for (let i = str.length - 1; i >= 0; i--)
  {
    if (str[i] != " ")        s += str[i];
    if (str[s.length] == " ") s += str[s.length];
  }
  return s;
}
*/

/* 
function solve(str) {
  let arr = [...str].filter(x => x != ' ')
  return str.replace(/\S/g, _ => arr.pop())
}
*/