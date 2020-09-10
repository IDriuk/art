// Double Cola
// https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

function whoIsNext(names, r){
  let map = names.reduce((ac, name) => ({ [name]: 1, ...ac }), {})
  let count = 0
  while ( true ) {
    let name = names.shift()
    count += map[name]
    if ( r <= count ) { return name }
    names.push(name)
    map[name] *= 2
  }
}