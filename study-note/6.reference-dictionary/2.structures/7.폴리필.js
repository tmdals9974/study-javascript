/****************************************************************
 * * 폴리필 : 바벨 작동 원리. 기존 자바스크립트 코드로, 상위 자바스크립트의 코드를 구현.
 * * ex) map 함수가 없다고 가정
 * * 대표적인 폴리필 : core-js (babel 내부에 탑재됨.)
 ****************************************************************/

Array.prototype.MyMap = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
};

console.log([1, 2, 3].MyMap((n) => n * 2));
