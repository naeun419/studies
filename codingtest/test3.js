function frequencyOfMaxValue(numbers, q) {
  let result = [];
  let freq = Array.from({length:100005}, () => 0);
  let maxel = -1;
  let res = new Array(numbers.length);
  for(let i = numbers.length -1; i >= 0; i--) {
    freq[numbers[i]]++;
    maxel = Math.max(maxel, numbers[i]);
    res[i] = freq[maxel];
  }
  for(let i = 0; i < q.length; i++) {
    result.push(res[q[i]-1]);
  }
  return result;
}

// function frequecyOfMaxValue(numbers, q) {
//   let queryRes = new Array(q.length + 1).fill(0);
//   let res =  [];

//   for (const v of q) {
//     if (queryRes[v] === 0) {
//       let split = numbers.filter((value, index) => {
//         if (index + 1 >= v) {
//           return value;
//         }
//       });
//       let maxValueCount = maxCount(Math.max(...split), split);
//       res.push(maxValueCount);
//     } else {
//       res.push(queryRes[v]);
//     }
//   }
//   return res;
// }

// function maxCount(maxValue, arr) {
//   let count = 0;
//   for (const v of arr) {
//     if (v === maxValue) count++;
//   }
//   return count;
// }

console.log(frequencyOfMaxValue([5,4,5,3,2], [1,2,3,4,5]));