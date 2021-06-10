function solution(arr) {
  let sort = arr.slice();
  sort.sort((a, b) => (a-b));

  let cnt = 0;
  while (sort !== arr) {

  }

  return cnt;
}

console.log(solutioin([2,5,3,1]));