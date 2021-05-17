function solution(N, A) {
    let arr = new Array(N).fill(0);

    for(let tmp in A) {
        if (A[tmp] >= 1 && A[tmp] <= N) {
            arr.splice(A[tmp]-1, 1, arr[A[tmp]-1]+1);
        } else if (A[tmp] === N+1) {
            let max = Math.max(...arr);
            arr.fill(max);
        }
    }
    return arr;
}