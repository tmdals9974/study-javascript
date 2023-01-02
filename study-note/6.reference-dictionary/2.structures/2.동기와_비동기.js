/****************************************************************
 * * 동기 코드 : 순차적 실행
 ****************************************************************/

function double(x) {
  return x * 2;
}

const x = double(100);
const y = x;

console.log(x);
console.log(y);

/****************************************************************
 * * 비동기 코드 : 비순차적 실행 (동시 실행 가능)
 * * 아래 코드 해결법 : calcValue가 콜백함수를 받아 실행하는 것.
 ****************************************************************/

function calcValue(a, b) {
  setTimeout(() => {
    return a + b;
  }, 100);
}

const r = calcValue(10, 20);
const z = r;

console.log(r);
console.log(z);

/****************************************************************
 * * Promise
 * * 기존 콜백 구조를 대체.
 * * 성공 시 resolve 호출 => then으로 받음
 * * 실패 시 reject 호출 => catch로 받음
 ****************************************************************/

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // if (Math.floor(Math.random() * 10) % 2 === 0) {
    resolve("first success");
    // } else {
    //   reject("failure");
    // }
  }, 2000);
});

p.then((msg) => {
  console.log(msg);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second success");
    }, 3000);
  });
})
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });
