// Tribonacci Sequence
// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
  if ( n == 0 ) return []
  if ( n <= 3 ) return signature.slice(0, n)
  
  let s = [...signature]
  
  for (let i = 3; i < n; i++) {
    s[i] = s[i - 1] + s[i - 2] + s[i - 3]
  }
  
  return s
}