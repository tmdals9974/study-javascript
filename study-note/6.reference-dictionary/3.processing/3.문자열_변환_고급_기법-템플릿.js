/****************************************************************
 * * 템플릿리터럴로 문자열 생성
 ****************************************************************/
const userName = "Kim mintae";
const bolder = (text) => `<b>${text}</b>`;

console.log(`
  Hi~ ${userName}
`);

console.log(`
  Hi~ ${bolder(userName)}
`);

/****************************************************************
 * * 태그드템플릿으로 문자열 생성
 ****************************************************************/
function div(strings, ...fns) {
  //? strings: ${} 기준으로 split되어 배열로 들어감  => 일반 문자열들
  //? fns: ${} 내부 코드 => fns[0]은 함수  (const Div 참고)

  const flat = (s) => s.split("\n").join("");

  return function (props) {
    return `<div style="${flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])}"></div>`;
  };
}

const Div = div`
  font-size: 20px;
  color: ${(props) => (props.active ? "white" : "gray")};
  border: none;
`;

console.log(Div({ active: true }));
