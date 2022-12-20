let a = 10;
let b = a;
b = 20; //a = 10;
//기본형 데이터 타입 (primitive) 은 값이 복사됨

let o = {
  isLoading: false,
};
let o2 = o;
o2.isLoading = true; //객체는 참조됨