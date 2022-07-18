function solution(arr) {
  let answer = [];
  let reversedNum = arr
    .map((v) => v.toString().split('').reverse().join(''))
    .map((v) => Number(v));

  let check = 0;

  for (let x of reversedNum) {
    for (let i = 2; i <= 9; i++) {
      if (x > 10 && x % i === 0) {
        check++;
      } else if (x === 1) {
        check++;
      }
    }
    if (check === 0) {
      answer.push(x);
    }
    check = 0;
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 숫자를 뒤집고 => 앞이 0이면 생략 => 소수인지 판단 => true => 출력

// 문제 발생
// 조건이 맞으면 여러번 들어간다.

// 숫자를 뒤집은 후 각 배열의 요소가 소수인지 판단.
// 1의 자리이고 1이 아니면  소수이기 때문에 push 하고
// 10보다 큰 수들은 자연수 2 ~ 9로 나눠서 나머지가 0이 아닌 수들만 push하려고 시도 함
