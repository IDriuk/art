// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
  let count = 0
  let a = arr.filter( x => {
    if (x === 0) {
      count++
      return false
    } else {
      return true
    }
  })
  
  while (count--) {
    a.push(0)
  }
  
  return a
}

/*
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}  
*/