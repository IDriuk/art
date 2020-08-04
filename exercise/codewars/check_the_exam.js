// Check the exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(ar1, ar2) {
  let result = ar2.reduce((ac, val, i) => {
    if ( val === ar1[i]) {
      ac = ac + 4
    } else if ( val === "" ) {
      ac = ac + 0
    } else {
      ac = ac - 1
    }
    return ac
  }, 0)
  
  return result >= 0 ? result : 0
}