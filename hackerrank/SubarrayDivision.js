function birthday(s, d, m) {
  let sol = 0;
  for(let i = 0; i < s.length; i++) {
    let sum = 0;
    for(let j = i; j < i+m ; j++) {
      if (i+m <= s.length) {
        sum += s[j];
      }
    }
    if (d === sum) {
      sol++;
    }
  }
  return sol;
}

console.log(birthday([1,2,1,3,2], 3, 2));