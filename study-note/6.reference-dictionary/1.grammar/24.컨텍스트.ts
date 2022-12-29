/****************************************************************
 ** context의 2가지 종류
 ** 1. execution 컨텍스트 (=실행 컨텍스트, 기본 컨텍스트)
 ** 2. lexical 컨텍스트
 ****************************************************************/

const person2 = {
  name: "lee seung min",
  age: 28,
  getAge() {
    return this.age;
  },
};

console.log(person2.age);
console.log(person2.getAge()); //소유자가 확인 됨

const age1 = person2.getAge;

//console.log(age2()); //error, 소유자가 누군지 알 수 없음.

/****************************************************************
 ** 컨텍스트 교정법
 ** 1. call, apply : 메소드 호출 방법
 ** 2. bind : 선언을 통해 this를 고정
 ** 3. lexical context : 애로우 함수를 통해 this를 고정
 ****************************************************************/

//! call, apply
console.log(age1.call(person2)); //매개변수를 넘길 수 있음
console.log(age1.apply(person2)); //매개변수를 배열로 묶어서 넘길 수 있음

//! bind
class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.getAge = this.getAge.bind(this); //getAge가 언제어디서어떻게 호출되어도 this로 고정.
  }

  getAge() {
    return this.age;
  }
}

const p2 = new Person2("Lee seungmin", 28);
console.log(p2.getAge());

const age2 = p2.getAge;
console.log(age2()); //bind를 통해 성공

//! lexical
class Person3 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName = () => this.name; //! this가 고정됨
}

const p3 = new Person3("SeungMin");
console.log(p3.getName());
const name3 = p3.getName;
console.log(name3());
