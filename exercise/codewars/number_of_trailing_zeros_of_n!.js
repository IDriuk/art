// Number of trailing zeros of N!
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

function zeros (n) {
  let k = Math.floor( Math.log(n) / Math.log(5) )
  let z = 0
  
  for (let i = 1; i <= k; i++) {
    z += Math.floor( n / Math.pow(5, i))
  }

  return z
}

/* 
function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
} 
*/

/* 
function zeros (n) {
  let zeros = 0
  for ( let i = 1; i <= n; i++ ) {
    let v = i;
    while ( !(v % 5) ) {
      zeros++
      v /= 5
    }
  }

  return zeros
}
*/