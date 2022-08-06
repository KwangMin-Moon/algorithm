function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

// 내가 짠 코드
// Math.max를 이용하면 더 코드가 간결해지고 가독성도 좋아지겠다.
// function solution(k, arr) {
//   let sum = 0;
//   for (let i = 0; i < k; i++) {
//     sum += arr[i];
//   }
//   let answer = sum;
//   for (let i = k; i < arr.length; i++) {
//     sum = sum + arr[i] - arr[i - k];
//     if (answer < sum) {
//       answer = sum;
//     }
//   }

//   return answer;
// }
