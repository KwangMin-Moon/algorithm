function solution(s) {
  let answer = [];
  let p = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      answer.push(s[i]);
      if (p !== 1) {
        answer.push(p);
        p = 1;
      }
    }
    if (s[i] === s[i + 1]) {
      p += 1;
    }
  }

  return answer.join('');
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
