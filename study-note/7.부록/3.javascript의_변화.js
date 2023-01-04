/****************************************************************
 * * 자바스크립트는 표현력이 명시적이고 풍부하게, 코드가 하는 일이 명시적이게 변하고 있음.
 ****************************************************************/

function foo() {
  for (let i = 0; i < arguments.length; i++) {
    //명시적이지 않음. 모르는 사람이 있을 수 있음.
    arguments[i];
  }
}

function Foo(...args) {
  for (let i = 0; i < args.length; i++) {
    //명시적. 모두가 앎.
    args[i];
  }
}

// * ***********************************************************

const arr = [1, 2, 3, 4];

const newArr = arr.concat([5, 6, 7, 8]); //명시적이지 않음. concat의 기능을 알아야함.

const NewArr = [...arr, 5, 6, 7, 8]; //명시적. ...을 모르더라도 arr이 들어가겠구나 추론 가능

// * ***********************************************************

const obj = {
  a: 1,
  b: 2,
};

const newObj = Object.assign({}, obj, { a: 10, c: 3, d: 4 });
const NewObj = { ...obj, a: 10, c: 3, b: 4 };

// * ***********************************************************

function Baz() {
  this.name = "baz";
}

Baz.prototype.getName = function () {
  return this.name;
};

const baz = new Baz();
baz.getName();

class BAZ {
  constructor() {
    this.name = "baz";
  }
  
  getName() {
    return this.name;
  }
}

// * ***********************************************************