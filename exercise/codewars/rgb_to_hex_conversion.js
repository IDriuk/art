// RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function rgb(r, g, b){
  r = r < 0 ? 0 : r > 255 ? 255 : r
  g = g < 0 ? 0 : g > 255 ? 255 : g
  b = b < 0 ? 0 : b > 255 ? 255 : b
  
  function pad(v) {
    v = v.toString(16)
    if (v.length < 2) { 
      v = '0' + v
    }
    return v.toUpperCase()
  }
  
  return `${pad(r)}${pad(g)}${pad(b)}`
}

/*
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}  
*/