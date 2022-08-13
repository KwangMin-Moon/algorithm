function solution(s) {}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));

// Map과 Set을 왜 사용하는지 알 수 있는 문제였다.

// function solution(s) {
//   let answer;
//   let ctn = 0;
//   let candidate = ['A', 'B', 'C', 'D', 'E'];
//   let vote = { A: 0, B: 0, C: 0, D: 0, E: 0 };
//   for (let i = 0; i < s.length; i++) {
//     let index = candidate.indexOf(s[i]);
//     vote[candidate[index]]++;
//   }
//   for (let i in vote) {
//     if (ctn < vote[i]) {
//       ctn = vote[i];
//       answer = i;
//     }
//   }
//   return answer;
// }

// let str = 'BACBACCACCBDEDE';
// console.log(solution(str));

// map을 이용해 내가 푼 방식
// function solution(s) {
//   let answer;
//   let ctn = 0;
//   let candidate = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (candidate.has(s[i])) {
//       candidate.set(s[i], candidate.get(s[i]) + 1);
//     } else {
//       candidate.set(s[i], 1);
//     }
//   }
//   for (let c of candidate.keys()) {
//     if (ctn < candidate.get(c)) {
//       ctn = candidate.get(c);
//       answer = c;
//     }
//   }
//   return answer;
// }
