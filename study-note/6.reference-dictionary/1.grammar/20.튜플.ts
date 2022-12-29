//튜플 : 타입스크립트에서 제공. 배열 인덱스에 타입 제약 가능.

const address: [number, string, string] = [14023, "서울시", "송파구"];

let [zipcode, address1] = address;

// zipcode = "12345"; //error

type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
  ["헨리 8세", "셰익스피어", 1884],
  ["헨리 8세", "셰익스피어", 1884],
];

BookData.push(["a", "b", 23]);
//BookData.push(["a", "b", "c"]);  //error

function getArrayOne(): any[] {
  return [14023, "서울시", "송파구"];
}

type Address = [number, string, string];

function getArrayTwo(): Address {
  return [14023, "서울시", "송파구"];
}

let address2 = getArrayTwo()[2];

//address2 = 12; //error