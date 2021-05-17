function solution(A) {
    if (A.length === 0) {
        return 1;
    }

    A.sort((a, b) => (a - b));
    let comp = 1;
    for(let tmp of A) {
        if (comp === tmp) {
            comp++;
        } else {
            return comp;
        }
    }
    return comp;
}

console.log(solution([2,3,1,5]))

// two-pointer algorithm 사용