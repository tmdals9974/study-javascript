/****************************************************************
 * * Map, Set, Array, Object 등 순회 가능한 객체는 매우 많음.
 * * 모두 이터레이션 프로토콜에 의해 작동함.
 *
 * 이터레이터 프로토콜 : 반환 값 객체에 next 메소드가 존재해야하며, next가 반환하는 객체는 done 속성 (boolean), value 속성이 있어야 함. (제네레이터 함수를 이용)
 ****************************************************************/

const myIterable = {};

//? Symbol : 언어 구조에서 유일한 값을 만들어내는 기능.
myIterable[Symbol.iterator] = function* () {
  let i = 1;
  while (i <= 100) {
    yield i++;
  }
};

for (const n of myIterable) {
  //? for of가 이터레이션 프로토콜을 준수하기 때문에 정상 작동.
  console.log(n);
}
