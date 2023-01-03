/****************************************************************
 * * 객체를 문자열로 변환하는 예제코드
 ****************************************************************/

/*
문자열 포맷: id, item, price, discount
*/
const cartItems = [
  { id: 1, item: "핸드밀", price: 40000, discount: 0 },
  { id: 2, item: "A4용지", price: 4000, discount: 0 },
  { id: 3, item: "수영복", price: 120000, discount: 0 },
  { id: 4, item: "색연필72색", price: 150000, discount: 0 },
];

//전통적인 for 문을 이용한 문자열 변환
const cartItemsArray = [];

for (const item of cartItems) {
  const row = [];

  for (const [, value] of Object.entries(item)) { 
    //? entries는 Object 내 속성값들을 [키, 값] 배열로 만들어서 리턴해줌.
    //? 배열 구조분해 할당을 이용하여 [, value]로 값만 받음.
    row.push(value);
  }

  cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join("==="));


//배열연산을 이용하여 문자열 변환
const extractValueInObject = (obj) => Object.entries(obj).map(([, value]) => String(value));

const cartItemsString = cartItems.map(extractValueInObject).join("===");

console.log(cartItemsString);
