function solution(str) {
  let answer = str
    .split('')
    .map((v) => Number(v))
    .filter((v) => v >= 0)
    .join('');

  return answer.slice(0, 1) === '0' ? answer.slice(1, answer.length) : answer;
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));
