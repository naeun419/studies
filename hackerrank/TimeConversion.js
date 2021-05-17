function solution(s) {
  let hour = 0;
  if (s.includes('PM')) {
     hour = s.substring(0,2);
     if (hour !== '12') {
      hour = Number(hour) + 12;
     }
    s = hour + s.substring(2,8);
  } else if (s.includes('AM')) {
    hour = s.substring(0,2);
    if (hour === '12') {
      hour = "00";
    }
    s = hour + s.substring(2,8);
  }
  return s;
}

console.log(solution('07:05:45PM'));