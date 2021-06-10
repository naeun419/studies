function largestArea(samples) {
  let len = samples.length;
  let answer = 0;
  for(let i = 1; i < len; ++i) {
    for(let j = 1; j < len; ++j) {
      if(samples[i][j] > 0) {
        let min = Math.min(samples[i-1][j-1], samples[i][j-1], samples[i-1][j]);
        samples[i][j] = min + 1;
      }
      if (answer < samples[i][j]) answer = samples[i][j];
    }
  }
  return answer;
}