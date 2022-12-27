const books = [];

books[0] = "헨리 6세 제1부";
books[1] = "헨리 6세 제2부";
books[2] = "헨리 6세 제3부";

books.push("리처드 3세");
books.push("실수 연발");
books.push("말괄량이 길들이기");

console.log(books);
console.log(books.length);

books.pop(); //뒤에서부터 지움
books.pop();

console.log(books);
console.log(books.length);

const oneBooks = books.slice(1, 2); //특정 인덱스를 리턴함. 원본배열엔 영향없음.

console.log(oneBooks);
console.log(books);
console.log(books.length);

const twoBooks = books.splice(1, 2, "햄릿", "오셀로", "리어왕"); //특정 인덱스를 리턴함. 원본 배열에 영향 있음.

console.log(twoBooks);
console.log(books);
console.log(books.length);

twoBooks.shift(); //앞에서부터 지움

console.log(twoBooks);

twoBooks.unshift('한여름 밤의 꿈'); //앞에 넣음

console.log(twoBooks); 

const allBooks = books.join(); //문자열로 합침

console.log(allBooks); 

const newBooks = allBooks.split(','); //문자열을 나눔

console.log(newBooks);

console.log(oneBooks);
console.log(twoBooks);

const nextBooks = oneBooks.concat(twoBooks); //배열을 합침

console.log(nextBooks);

const nextBookList = [...oneBooks, ...twoBooks];

console.log(nextBookList);