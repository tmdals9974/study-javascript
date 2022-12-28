type Book = {
  title: string;
  copyright?: string;
  author?: string;
};

const books: string[] = ["헨리 6세", "리처드 3세", "실수 연발", "말괄량이 길들이기", "헨리 8세"];

// * =================================================================
// * forEach문은 for문에 비해 성능이 떨어짐. 몇천건 정도엔 영향 없음.
books.forEach((book: string, idx: number) => {
  console.log(book, idx);
});

// * =================================================================
// * map 함수는 반환값이 있음
const bookObjects: Book[] = books.map((book: string) => {
  return {
    title: book,
    author: undefined,
  };
});

console.log(bookObjects);

// * =================================================================
// * 메소드 체이닝
const ShakespeareOneBooks: Book[] = books
  .map((book: string) => ({
    title: book,
  }))
  .map((book: Book) => ({
    ...book,
    author: "William Shakespeare",
  }));

console.log(ShakespeareOneBooks);

// * =================================================================
// * 위 메소드 체이닝 예제의 메소드를 분리. 가독성, 재활용성 증가
const bookTitleToBookObject = (book: string) => ({ title: book });
const makeAuthor = (name: string) => (book: Book) => ({
  ...book,
  author: name,
});

const shakespeareTwoBooks: Book[] = books.map(bookTitleToBookObject).map(makeAuthor("William Shakespeare"));

console.log(shakespeareTwoBooks);

// * =================================================================
// * 필터링

const henry: Book[] = shakespeareTwoBooks.filter((book: Book) => book.title.includes("헨리"));

console.log(henry);

// * =================================================================
// * 누적 함수

const someNumbers: number[] = [10, 5, 3, 14, 56];

const sumNumber = someNumbers.reduce((a: number, b: number) => a + b, 0);

console.log(sumNumber);

// * =================================================================
// * 누적 함수를 number 외에도 활용 가능

type SomeObject = {
  [key: string]: string | number;
};

const someObjects: SomeObject[] = [{ border: "none " }, { fontSize: 24 }, { className: "box sm-box" }];

const someObject: SomeObject = someObjects.reduce((a: SomeObject, b: SomeObject) => ({ ...a, ...b }), {});

console.log(someObject);

// * =================================================================
// * 유사배열

function sumNumbers(): number {
  //arguments는 유사배열이여서, 배열 메소드가 존재하지 않음. Array.from으로 배열로 만들어주어야함.
  return Array.from(arguments).reduce((a: number, b: number) => a + b, 0);
}

//console.log(sumNumbers(10, 20, 30, 40, 50)); 

function sumNumbersForTypeScript(...args: number[]): number {
  return args.reduce((a: number, b: number) => a + b, 0);
}

console.log(sumNumbersForTypeScript(10, 20, 30, 40, 50));
