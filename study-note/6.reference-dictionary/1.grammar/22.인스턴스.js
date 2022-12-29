/** 자바스크립트에서 인스턴스 생성 방법
 * 1. 함수
 * 2. 클래스
 */

function CartV1() {
  this.cart = [];
  this.currentId = 0;
}

//프로토타입에 등록
CartV1.prototype.getNewId = function () {
  this.currentId++;
  return this.currentId;
};

//객체에 등록
CartV1.createItem = function (name, price) {
  return { name, price };
};

CartV1.prototype.addItem = function (item) {
  this.cart.push({
    ...item,
    id: this.getNewId(),
  });
};

CartV1.prototype.clearCart = function (item) {
  this.cart = [];
  this.currentId = 0;
};

/** 함수 앞에 new 연산자를 사용하게되면
 * 1. 자바스크립트가 빈 객체를 하나 만들며 함수에 전달함. (함수에서는 this를 이용해 전달받은 객체에 바인딩할 수 있다.)
 * 2. 함수의 프로토타입을 객체의 __prototype__ 에 할당함
 * 3. 함수 실행이 끝난 후 객체를 반환함.
 */
const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem("수박", 8000));
shoppingCartV1.addItem(CartV1.createItem("사과", 12000));
shoppingCartV1.addItem(CartV1.createItem("두부", 2000));

console.log(shoppingCartV1.cart);

//================================================================
0;
class CartV2 {
  static createItem = (name, price) => ({
    name,
    price,
  });

  cart;
  currentId;

  constructor() {
    this.currentId = 0;
    this.cart = [];
  }

  getNewId = () => {
    this.currentId++;
    return this.currentId;
  };

  addItem = (item) => {
    this.cart.push({
      ...item,
      id: this.getNewId(),
    });
  };

  clearCart = () => {
    this.currentId = 0;
    this.cart = [];
  };
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.createItem("수박", 8000));
shoppingCartV2.addItem(CartV2.createItem("사과", 12000));
shoppingCartV2.addItem(CartV2.createItem("두부", 2000));

console.log(shoppingCartV2);
