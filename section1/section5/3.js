function solution(m, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (arr[i] === m) answer++;
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      console.log(sum);
      if (sum === m) {
        answer++;
        break;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

// 간단한 방법
// 완전 탐색을 하면 간단하다. 하지만 시간이 많이 걸린다.
// 0번 인덱스부터 시작해서 합이 정해진 숫자가 나올 때 까지 더하고 다음 인덱스로 넘어가면서 완전탐색한다.
