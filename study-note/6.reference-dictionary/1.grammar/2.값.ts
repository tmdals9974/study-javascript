//! enum

enum Color {
  Red, //0
  Blue, //1
  Green, //2
}

Color.Red;
Color[0]; //Red

enum Color2 {
  Red = 2,
  Blue = 5,
  Green = 7,
}

Color.Green;
Color[2];

// ! Never
//never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}
