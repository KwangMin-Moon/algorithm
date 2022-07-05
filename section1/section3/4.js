function solution(s, t) {
  const answer = s;
  let startNum = 1;
  let result1 = [];
  let result2 = [];
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== t) {
      startNum++;
      result1.push(startNum);
    } else {
      startNum = 0;
      result1.push(startNum);
    }
  }
  for (let i = answer.length - 1; i >= 0; i--) {
    if (answer[i] !== t) {
      startNum++;
      result2.push(startNum);
    } else {
      startNum = 0;
      result2.push(startNum);
    }
  }

  let reverseResult2 = result2.reverse();
  let result = result1.map((v, i) =>
    v > reverseResult2[i] ? reverseResult2[i] : v
  );
  return result;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
