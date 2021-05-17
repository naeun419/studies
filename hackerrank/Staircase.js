function solution(n) {
  let output = '';
  for(let i=1; i<=n; i++) {
    for(let j=n-1; j>=i; j--) {
      output += ' ';
    }
    for(let j=1; j<=i; j++) {
      output += '#';
    }
    output += "\n";
  }
  console.log(output);
}

console.log(solution(6));