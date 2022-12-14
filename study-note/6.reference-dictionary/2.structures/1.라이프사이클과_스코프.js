/****************************************************************
 * * 변수나 함수는 '스코프'라는 공간에 생성됨.
 * * 변수나 함수를 개발자가 직접 생성/소멸 시키지 않기 위해 '스코프'라는 공간으로 그룹핑하여 컨트롤.
 * * 1. 전역 스코프 : 앱 실행 시 생성, 종료 시 소멸.
 * * 2. 함수 스코프 : 함수를 통하여 생성. 함수 호출로 진입 시 생성, 함수를 벗어날 경우 소멸
 * * 3. 블록 스코프 : 코드를 묶고있는 공간은 모두 블록 스코프. 블록 내로 진입했을 때 생성, 블록 벗어날 경우 소멸
 ****************************************************************/

let myname = "kim"; //전역 스코프

// ? 스코프 중첩
// * 해당 함수스코프는 전역스코프 내에 포함되어 있음. 내부 스코프에서 외부 스코프로 접근 가능.
function foo() {
  let x = 10; //foo 호출 시 생성되고, 벗어난 이후 소멸됨.
  console.log(myname); //외부 접근 가능

  // ? 호이스팅
  // * 스코프가 생성 될 때, 작성한 코드의 순서와 상관 없이, 함수나 변수 생성을 먼저 함.
  bar(); //선언문보다 호출문이 먼저 왔음에도 오류가 발생되지 않음. => 호이스팅 때문.
  //zoo(); //zoo는 함수식이기에 호이스팅이 적용되지 않아서 오류발생함.

  //함수스코프 중첩
  function bar() {
    let y = 10;

    console.log(x); //외부 접근 가능
    console.log(myname);
  }

  if (x === 10) {
    let x = 100;

    console.log(x); //결과 : 100 //같은 스코프 내에서부터 먼저 변수를 찾음. 이후 외부로 확장
  }

  const zoo = function() {};
}

foo();
