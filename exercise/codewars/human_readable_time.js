// Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  let ms = 60
  let hs = ms * 60
  
  let h = Math.floor( seconds / hs )
  let m = Math.floor((seconds - h * hs) / ms)
  let s = seconds - h * hs - m * ms
  
  return `${h >= 10 ? h : '0' + h}:${m >= 10 ? m : '0' + m}:${s >= 10 ? s : '0' + s}`
}