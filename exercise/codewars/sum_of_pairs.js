// Sum of pairs
// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

var sum_pairs=function(ints, s){
  let set = {}
  for ( let i = 0; i < ints.length; i++) {
    if ( !set[ints[i]] ) {
      set[ints[i]] = `${i}`
    }
  }

  let minIndex = Infinity
  let result
  
  for (let i = 0; i < ints.length; i++) {
    let pair = s - ints[i]
    if (set[pair]) {
      let pairIndex = +set[pair]
      if (pairIndex != i) {
        let maxIndex = Math.max(pairIndex, i)
        if ( maxIndex < minIndex ) {
          minIndex = maxIndex
          result = [ints[i], pair]
        }
      }
    }
  }
  
  return result
}

/*
var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
} 
*/