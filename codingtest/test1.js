function getMin(s) {
  let stack = [];
  let stackSize = 0;
  const parenthesis = ['(', ')'];

  for (const v of s) {
    if (stackSize === 0) {    //빈 stack일 경우, v의 요소를 stack에 넣고, size크기 변경
      stack.push(v);
      stackSize++;
    } else {
      const top = stack[stackSize - 1];  //top 변수에 stack 요소 대입
      if (top === parenthesis[0] && v === parenthesis[1]) {  //직전에 stack에 쌓인 요소와 v 비교
        stack.pop();   // 괄호 대칭일 경우 stack에서 pop, size 줄이기
        stackSize--;
      } else {    // 아닐 경우, stack에 저장
        stack.push(v);
        stackSize++;
      }
    }
  }
  return stackSize;
}
