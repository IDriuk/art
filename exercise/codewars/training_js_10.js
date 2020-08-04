// Training JS #10: loop statement --for
// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr){
  var odd=[],even=[];
  
  for (var i = 0; i < arr.length; i++) {
    let el = arr[i]
    if (el % 2) {
      odd.push(el)
    } else {
      even.push(el)
    }
  }
  
  
  return [odd,even];
}