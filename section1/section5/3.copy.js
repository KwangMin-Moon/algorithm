function solution(m, arr) {
  let answer = 0;
  let lt = (rt = 0);
  let sum = arr[lt];
  while (rt <= arr.length - 1) {
    if (sum === m) {
      answer++;
      sum -= arr[lt];
      lt++;
    } else if (sum < m) {
      rt++;
      sum += arr[rt];
    } else if (sum > m) {
      sum -= arr[lt];
      lt++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

// 순서대로 합해서 알아본다 생각안하고 수의 조합의 합이라고 생각하면 다른 방식으로 생각할 수 있다.
