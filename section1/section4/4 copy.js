function solution(m, product) {
  let answer = 0;
  let sum = 0;
  let arr = [...product];
  let maxIndex = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] > max) {
      max = arr[i][0];
      maxIndex = i;
    }
  }

  arr[maxIndex][0] = arr[maxIndex][0] / 2;

  let arrSum = arr
    .map((arr) => arr.reduce((a, b) => a + b), 0)
    .sort((a, b) => a - b);

  for (let i = 0; i < arrSum.length; i++) {
    sum += arrSum[i];
    if (sum <= m) {
      answer++;
    }
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

// 내가 푼 방법
// 1. 선물 가격 중 가장 비싼걸 50%로 해준다.
// 2. 선물 가격과 배송비를 합해 낮은 가격 순서로 재배열 한다.
// 3. for문을 돌며 선물 가격이 예산보다 작으면 answer에 1씩 더해주고 선물 가격도 합하며 비교해줌
// 이 방법의 예외상황을 체크 못했다. 단지 가장 큰수를 50%할인한다 생각했는데 그게 아니었다. 가장 큰 수가 50%할인을
// 받아도 예산을 초과할 수도 있다.

// 완전 탐색은 모든 경우의 수를 다 확인하는 것
// 이 문제에서 모든 경우의 수는 각 선물마다 한 번씩 할인 받은 경우를 다 체크해보는 것
