// Exes and Ohs
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
  let obj =  str.toLowerCase().split('').reduce((ac, val) => {
    if ( val == 'x' ) ac.x++
    if ( val == 'o' ) ac.o++
    return ac
  }, {x: 0, o:0} )
  
  return obj.o == obj.x
}