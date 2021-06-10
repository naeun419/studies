function migratoryBirds(arr) {
  let sorted = arr.sort();
  let ans = sorted[0];
  let max = 1;
  let count = 0;

  for(let i = 0; i < sorted.length; i++) {
    count = ( sorted[i] === sorted[i-1]) ? count + 1 : 0;
    if (count > max) {
      ans = sorted[i];
      max = count;
    }
  }
  return ans;
  // let ans = 0;
  // let sol = 0;
  // let map = new Map();
  // for(const v of arr) {
  //   if (!map.has(v)) {
  //     map.set(v, 1);
  //   } else {
  //     map.set(v, map.get(v)+1);
  //   }
  // }

  // ans = map.get(1);
  // sol = 1;
  // for(const [key, value] of map.entries()) {
  //   if (ans < value) {
  //     ans = value;
  //     sol = key;
  //   }
  // }
  // return sol;
}

console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]));