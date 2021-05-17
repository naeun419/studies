function solution(A) {
    let sum = A.reduce((a, b) => a + b,  0);

    let left =0;
    let arr = [];
    for(let i=0; i < A.length-1; i++) {
        left += A[i];
        let right = sum - left;
        arr.push(Math.abs(left - right));
    }
    return Math.min(...arr);
}