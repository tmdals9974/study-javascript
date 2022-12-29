const c1 = {
  name: "c1",
  color: "red",
};

const c2 = {
  name: "c2",
  width: 300,
};

const c3 = {
  name: "c3",
  height: 100,
};

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c1.__proto__);

console.log(c1.toString());

/**
 * 모든 객체에는 proto가 존재
 * 프로토타입 최상위에는 Object 가 존재
 * toString()은 Object 내에 존재하는 메소드이며,
 * 현재 객체 내 메소드 중에 toString()이 없어서, 프로토타입에서 찾아봄.
 */

c1.__proto__ = c3;
c3.__proto__ = c2;

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c1.__proto__);
console.log(c1.name); //proto값보다 현재 객체값 먼저.
console.log(c1.width); //proto값 리턴

// **************************************************************** */
// * function의 prototype

function Foo(name) {
  this.name = name;
}

Foo.prototype.lastName = "WooWa";

const f = new Foo("Seung min");

console.log(f);
console.log(f.name);
console.log(f.lastName);