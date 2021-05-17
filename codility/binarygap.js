function solution(N) {
    let tmp = N.toString(2)

    console.log(typeof tmp);

    let res = 0
    let arr =[]

    for(let elem of tmp) {
        if (elem === '1') {
            if (res !== 0) {
                arr.push(res)
                res = 0
            }
        } else if (elem === '0') {
            res += 1
        }
    }

    // let sol = Math.max.apply(null, arr)

    if (arr.length === 0) return 0;
    else return Math.max(...arr);
    
}

console.log(solution(32))