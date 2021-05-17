function solution(A) {
    if (A.length === 1 || A.length === 2) {
        return 0;
    }

    A.sort((a, b) => (a-b));

    for(let i=0; i<A.length -2; i++) {
        let tmp = A[i+1] - A[i];
        if (A[i+1]+tmp !== A[i+2]) {
            return 0;
        }
    }
    return 1;
}