function getTotalX(a, b) {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);   // 오름차순으로 정렬

  let sol = [];
  let fac = a[a.length - 1];   // a의 마지막 요소

  while(1) {
    let flag = true;
    for(let i = 0; i < a.length; i++) {
      if (fac % a[i] !== 0) {
        flag = false;
        break;
      }
      if (b.filter(num => num % fac === 0).length !== b.length) {
        flag = false;
        break;
      }
    }
    if (flag) sol.push(fac);
    fac += a[a.length - 1];
    if (fac > b[0]) break;
  }
  console.log(sol);
  return sol.length;
}


console.log(getTotalX([2,4], [16,32,96]));