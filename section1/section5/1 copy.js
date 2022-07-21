function solution(arr1, arr2) {
  let answer = [];
  let p1 = 0;
  let p2 = 0;
  const n = arr1.length;
  const m = arr2.length;
  for (let i = 0; i < n + m; i++) {
    if (p1 < n) {
      if (arr1[p1] < arr2[p2]) {
        answer.push(arr1[p1]);
        p1++;
      } else {
        answer.push(arr2[p2]);
        p2++;
      }
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }

  return answer;
}

let a = [1, 2, 3, 10, 11];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

// 예외 상황들을 다 고려해주지 못한 풀이다.
// a가 더 길 수도 있다.
