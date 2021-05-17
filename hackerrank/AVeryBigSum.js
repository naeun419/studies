// function solution(ar) {
//     let len = ar[0].toString().length;
//     let sol = [];
//     for(let i=0; i<ar.length; i++) {
//         let tmp = 0;
//         for(let j=0; j<len; j++) {
//             tmp += ar[i][j];
//         }
//         sol[i-1] += tmp/10;
//         sol.push(tmp%10);
//     }
//     let real_sol = new String();
//     for(let tmp of sol) {
//         real_sol += tmp;
//     }
//     return parseInt(real_sol, 2);
// }

// console.log(solution([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

function solution(ar) {
    let sol = 0;
    for(let tmp of ar) {
        sol += tmp;
    }
    return sol;
}

console.log(solution([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
