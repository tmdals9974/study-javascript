// * 일급함수란, 함수를 값처럼 취급하는 것을 의미함.
// * 변수로서 사용하면, 매개변수로 받거나 함수 리턴값으로 주거나 등 쓰임새가 다양함
// * 아래 예시 코드는 함수 리턴값으로 주는 경우의 예제

function salePrice(discountRate, price) {
  return price - (price * (discountRate * 0.01));
}

console.log(salePrice(30, 567000));
console.log(salePrice(10, 567000));

function discountPrice(discountRate) {
  return function(price) {
    return price - (price * (discountRate * 0.01));
  }
}

console.log(discountPrice(30)(567000));
console.log(discountPrice(10)(567000));

let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log(summerPrice(567000));
console.log(winterPrice(567000));

//함수를 변수에 대입하여, 네이밍을 할 수 있음 => 가독성 증진