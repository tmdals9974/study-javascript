// * 일급함수란, 함수를 값처럼 취급하는 것을 의미함.
// * 변수로서 사용하면, 매개변수로 받거나 함수 리턴값으로 주거나 등 쓰임새가 다양함
// * 아래 예시 코드는 매개변수로 받는 경우의 예제

function ul(child: string): string {
  return `<ul>${child}</ul>`;
}

function ol(child: string): string {
  return `<ol>${child}</ol>`;
}

function makeLI(container: (child: string) => string, contents: string[]): string {
  const liList = [];

  for (const content of contents) {
    liList.push(`<li>${content}</li>`);
  }

  return container(liList.join(""));
}

const htmlUL = makeLI(ul, ["월", "화", "수", "목", "금", "토", "일"]);
const htmlOL = makeLI(ol, ["봄", "여름", "가을", "겨울"]);