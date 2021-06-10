function breakingRecords(scores) {
  let sol = [0, 0];
  let max = scores[0];
  let min = scores[0];

  for(let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      sol[0]++;
      max = scores[i];
    } else if (scores[i] < min) {
      sol[1]++;
      min = scores[i];
    }
  }
  return sol;

}

console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))