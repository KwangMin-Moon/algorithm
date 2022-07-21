function solution(n, k, card) {
  let answer;
  const temp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  const tempArr = Array.from(temp).sort((a, b) => b - a);
  answer = tempArr[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

// 중복 제거를 위해 set을 사용
// set에 추가할 때는 add 사용
// i, j는 n까지 돌아도 되긴하다. 어차피 k 내부가 안 돌꺼니까 set에 add안된다.
// 그래도 덜 돌게 n-2, n-1까지 돌게 하는게 더 좋다.
// set을 배열로 만드려면 Array.from()을 쓰면 된다.
