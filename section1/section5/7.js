function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));

// function solution(str1, str2) {
//   let answer;
//   let alignStr1 = str1.split('').sort().join('');
//   let alignStr2 = str2.split('').sort().join('');
//   alignStr1 === alignStr2 ? (answer = 'YES') : (answer = 'NO');
//   return answer;
// }
// 이렇게 풀면 더 간단하게 풀리지 않을까? 이렇게 풀 수도 있지만 8번 문제와 같은 경우 이런 방식으로 풀 수 없다.

// function solution(str1, str2) {
//   let answer;
//   let a = new Map();
//   let b = new Map();
//   let ctn = 0;

//   for (let s of str1) {
//     if (a.has(s)) a.set(s, a.get(s) + 1);
//     else a.set(s, 1);
//   }

//   for (let s of str2) {
//     if (b.has(s)) b.set(s, b.get(s) + 1);
//     else b.set(s, 1);
//   }
//   for (let [key, value] of a) {
//     if (value === b.get(key)) ctn++;
//   }
//   if (a.size === ctn) {
//     answer = 'YES';
//   } else answer = 'NO';
//   console.log(a, b);

//   return answer;
// }
// 내가 짠 코드
