/****************************************************************
 * * 타입스크립트를 지원하지 않는 라이브러리가 있음.
 * * 예를 들어, uuid 라는 라이브러리가 타입스크립트를 지원하지 않을 경우
 * * 해당 라이브러리를 직접 분석하여 type을 정의하기 전에
 * * @types/uuid 라고 라이브러리를 검색해보고
 * * 있을 경우, uuid와 @types/uuid를 모두 설치하면 정상작동함.
 ****************************************************************/

type UniqObject = {
  id: string;
  [key: string]: string | number | boolean;
};

const makeObject = (): UniqObject => ({
  id: "1234",
});

console.log(makeObject());
console.log(makeObject());

//id가 uniq하기 위해 uuid 라이브러리 인스톨 필요