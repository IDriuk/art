// Best travel
// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/train/javascript

function chooseBestSum(t, k, ls) {
  var biggestCount = 0;
  var recurseTowns = function(townsSoFar, lastIndex) {
    townsSoFar = townsSoFar || [];
    
    if (townsSoFar.length === k) {
      var sumDistance = townsSoFar.reduce((a,b)=>a+b);
      if (sumDistance <= t && sumDistance > biggestCount) {
        biggestCount = sumDistance;
      }      
      return; 
    }
    
    for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
      recurseTowns(townsSoFar.concat(ls[i]), i);
    }
  }
  recurseTowns();
  
  return biggestCount || null;
}