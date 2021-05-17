function solution(arr) {
    let len = arr.length;
    let left = 0;
    let right = 0;

    for(let i =0; i<len; i++) {
        let tmp = i;
        for(let j=0 ;j<len; j++) {
            if (i === j) {
                left += arr[i][j];
            }

            if (i+j === len -1) {
                right += arr[i][j];
            }

        }
    }
    return Math.abs(left-right);

}

console.log(solution([[11,2,4], [4,5,6], [10,8,-12]]));