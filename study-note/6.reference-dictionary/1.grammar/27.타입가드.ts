/****************************************************************
 * * 타입 가드 - 코드 안정성을 위해 사용
 ****************************************************************/

function doubleTypeFunction(a: number | string) {
  if (typeof a === "string") {
    return a.replace("x", "X");
  }

  // return a.replace("Y", "y"); //string이 아니기에 오류 감지
}

doubleTypeFunction(10);

function foo(a?: number | null) {
  if (!a) return; //없을경우 오류

  console.log("display before");
  console.log(a.valueOf());
  console.log("display after");
}

foo();

interface Foo {
  foo: string;
  common: string;
}

function isFoo(arg: any): arg is Foo { //is : 타입가드 문법. arg가 Foo와 같은지 체크
  return arg.foo !== undefined;
}

console.log(isFoo({ foo: "ok", common: "wow" }));
