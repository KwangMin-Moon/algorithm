// function solution(s) {
//   let answer = '';
//   for (word of s) {
//     word === 'A' ? (answer = answer + '#') : (answer = answer + word);
//   }
//   return answer;
// }

// console.log(solution('BANANA'));

function solution(s) {
  let answer = s.replace(/A/g, '#');

  return answer;
}

console.log(solution('BANANA'));
