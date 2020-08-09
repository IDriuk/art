// Find The Parity Outlier
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers){
  let odds = []
  let evens = []
  
  for ( let v of integers) {
    if ( v % 2 ) {
      odds.push(v)
    } else {
      evens.push(v)
    }
  }
  
  return odds.length > 1 ? evens[0] : odds[0]
}