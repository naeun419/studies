function solution (arr) {
    let pos = 0;
    let neg = 0;
    let zer = 0;

    for(let tmp of arr) {
        if(tmp > 0) {
            pos++;
        } else if (tmp < 0) {
            neg++;
        } else if (tmp === 0) {
            zer++;
        }
    }

    pos = pos/arr.length;
    neg = neg/arr.length;
    zer = zer/arr.length;
    console.log(pos.toFixed(6));
    console.log(neg.toFixed(6));
    console.log(zer.toFixed(6));

}

console.log(solution([-4,3,-9,0,4,1]));