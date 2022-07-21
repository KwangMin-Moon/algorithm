function solution(n, k, card) {
  let answer = [];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let m = j + 1; m < n; m++) {
        answer.push(card[i] + card[j] + card[m]);
      }
    }
  }
  return answer.sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

// 모두 더하는 걸 선택함
// 3개를 골라 다 더해야한다 생각해서 첫번째가 고정될 때 두번째, 세번째가 움직여야하고
// 두번째 수가 고정될 때 세번째수가 움직여야하니 자연스럽게 다중 반복문을 써야겠다 생각함
