function solution(s) {
  let answer = '';
  let result = '';
  for (let i = s.length - 1; i > -1; i--) {
    result += s[i];
  }

  if (result.toLocaleLowerCase() === s.toLocaleLowerCase()) {
    answer = 'YES';
  } else {
    answer = 'NO';
  }
  return answer;
}

let str = 'gooG';
console.log(solution(str));

// function solution(s) {
//   let answer = 'YES';
//   if (s.toLowerCase().split('').reverse().join('') !== s.toLowerCase())
//     return 'NO';
//   return answer;
// }

// let str = 'gooog';
// console.log(solution(str));
