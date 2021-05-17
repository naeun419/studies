function solution(candles) {
  candles.sort((a,b) => (b-a));
  let max = candles[0];
  let cnt = 0;
  for(let tmp of candles) {
    if(tmp === max) {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution([3,2,1,3]));