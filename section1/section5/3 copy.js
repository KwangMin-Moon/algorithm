function solution(m, arr) {
  let answer = 0;
  let rt = (lt = 0);
  let sum = arr[rt];
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
