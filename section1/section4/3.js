function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// 멘토, 멘티가 될 수 있는 경우의 수를 구하라
// 멘토가 되려면 멘티보다 모든 테스트에서 성적이 좋아야 한다.

// 어떤 식으로 접근해야할까?
// 순서도를 그려볼까?
// 1. 배열 첫번쨰 요소에서 경우의 수를 나열한다. / 아니면 각각의 숫자마다 될 수 있는 경우의 수? 3번은 4,1,2와 될 수 있었는데 두번쨰 배열요소에서 4번 나가리

// 해설
// 1. 총 경우의 수는 어떻게 될까를 먼저 생각, for문을 돌면서 다 확인해봐야한다.

// 배운점
// 반복문에서 전역에 변수를 설정하지않고 딱 필한 곳에 놓으면(전역에 선언하는게 필요한 경우도 있다.) 다시 0으로 재설정 안해줘도 된다. 위의 cnt와 pi,pj를 전역에서
// 선언했다면 반복문 돌 때 끝에서 0으로 초기화 해줘야한다. 그런데 반복문 안에서 선언하니까 자동으로 0으로 초기화 된다.
