/****************************************************************
 * * 배열 순회 방식 예제
 ****************************************************************/

// * 명령형 프로그래밍
let arr = [];
for (const n of [1, 2, 3, 4]) {
  arr.push(n * 3);
}

let tempArr = [];
for (const n of arr) {
  n % 2 !== 0 ?? tempArr.push(n);
}
arr = tempArr;

tempArr = [];
for (const n of arr) {
  tempArr.push(`<li>${n}</li>`);
}
arr = tempArr;

// * 함수형 프로그래밍
const arr2 = [1, 2, 3, 4]
  .map((n) => n * 3)
  .filter((n) => n % 2 !== 0)
  .map((n) => `<li>${n}</li>`);
