// Beginner Series #3 Sum of Numbers
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b )
{
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  
  if ( min == max) {
    return max
  } else {
    let num = min
    let sum = 0
    while ( num <= max ) {
      sum += num
      num++
    }
    return sum
  }
}

/* 
function GetSum( a,b ) {
   var result = 0;
   var bigger = a > b ? a : b;
   var smaller = a > b ? b : a;
   for (var i = smaller; i <= bigger; i++) { result += i }
   return result
}
*/