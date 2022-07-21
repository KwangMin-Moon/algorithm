function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let n = arr1.length;
  let m = arr2.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr1[i] === arr2[j]) {
        answer.push(arr1[i]);
      }
    }
  }

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
