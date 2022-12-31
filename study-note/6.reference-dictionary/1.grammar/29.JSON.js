/****************************************************************
 * * JSON : 데이터를 교환하기 위한 포맷
 * * key와 value(string) 모두 "" 로 감싸야만함.
 * * 마지막 컴마는 제거 필요.
 * * 함수 지원하지 않음.
 ****************************************************************/

const jsonString = `
  {
    "name": "Kim min tae",
    "age": 30,
    "bloodType": "B"
  }
`;

const myJson = JSON.parse(jsonString);

console.log(myJson.name);

console.log(JSON.stringify(myJson));
