function solution(arr) {
  arr.sort((a,b) => (a-b));

  let min = 0;
  let max = 0;
  for(let i=0; i<4; i++) {
    min += arr[i];
  }
  for(let i=1; i<=4; i++) {
    max += arr[i];
  }
  console.log(min, max);
}

console.log(solution([1,2,3,4,5]));