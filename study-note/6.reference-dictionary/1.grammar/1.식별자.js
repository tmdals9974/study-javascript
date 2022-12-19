/*
  ! 식별자는 데이터로 변환할 수 없지만 데이터는 식별자로 변환 할 수 있다
*/

const propertyName = 'name';

const o = {
  age:  10,
  [propertyName]: '김' //데이터를 식별자로 변환
}

console.log(o[propertyName]);

// =================================================================

/*
  ! 관습적인 컨벤션
  
  상수는 대문자로 명명.
*/

const AGE = 10;
