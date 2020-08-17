// Equal Sides Of An Array
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  if (arr.length == 0) return 0
  
  let leftSum = 0
  let rightSum = arr.slice(1).reduce( (ac, el) => ac + el, 0)
  
  for ( let i = 0; i < arr.length; i++) {
    if ( leftSum == rightSum) {
      return i
    } else if ( i + 1 < arr.length ) {
      leftSum += arr[i]
      rightSum -= arr[i + 1]
    }
  }
  
  return -1
}