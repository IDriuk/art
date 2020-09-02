// Weight for weight
// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function orderWeight(string) {
  return string.split(' ').sort( (a, b) => {
    let av = a.split('').reduce( (ac, v) => parseInt(ac) + parseInt(v))
    let bv = b.split('').reduce( (ac, v) => parseInt(ac) + parseInt(v))
    if (av == bv) {
      let length = Math.min(a.length, b.length)
      for ( let i = 0; i < length; i++ ) {
        if (a[i] - b[i] != 0) return a[i] - b[i]
      }
      return a.length - b.length
    } else { 
      return av - bv 
    }
  }).join(' ')
}

/*
function orderWeight(str) {
  const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
  return str.split(' ').sort((a, b) => {
    const diff = sum(a) - sum(b);
    return diff == 0 ? (a > b ? 1 : -1) : diff;
  }).join(' ');
} 
*/