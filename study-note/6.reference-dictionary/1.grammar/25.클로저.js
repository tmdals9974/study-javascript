/****************************************************************
 * * 아래 방법은 saveNumber가 보호받지 못함
 ****************************************************************/

let saveNumber1 = 1;

function increment1() {
  return saveNumber1++;
}

console.log(increment1());
console.log(increment1());

saveNumber1 = 200;

console.log(increment1());

/****************************************************************
 * *  saveNumber를 함수 안에 넣었지만 작동하지않음
 ****************************************************************/

function increment2() {
  let saveNumber = 1;
  return saveNumber++;
}

console.log(increment2());
console.log(increment2());
console.log(increment2());

/****************************************************************
 * * 클로저
 * * 함수 내에서 함수가 리턴 될 때, 리턴되는 함수가 바깥 함수 내 변수에 접근하게 되면 접근한 변수를 클로저라는 특별한 공간에 별도로 저장하게됨.
 * * 타입스크립트에서는 class - private으로 대체.
 ****************************************************************/

function increment3() {
  let saveNumber = 1;

  return function () {
    return saveNumber++;
  };
}

const inc = increment3();

console.log(inc());
console.log(inc());
console.log(inc());
