function solution(X, A) {
    if (X === A[0] && A.length === 1) {
        return 0;
    }

    let set = new Set();

    for(let tmp of A) {
        set.add(tmp);
        if(set.size === X) {
            return A.indexOf(tmp);
        }
    }

    if (set.size !== X) {
        return -1;
    }
}