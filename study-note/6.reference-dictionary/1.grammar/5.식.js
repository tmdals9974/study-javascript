// ! 구조분해할당

const colors = ["red", "green", "blue"];
const Colors = {
  purple: "purple",
  white: "white",
};

// const red = colors[0];
// const green = colors[1];
// const blue = colors[2];

const [red, blue] = colors;
const { purple, white } = Colors;

// ! 비교연산

let a = 10;
let b = "10";
a == b; //true
a === b; //false

typeof null; //return "object"