type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  ["className"]?: string;
};

/*
 * 객체를 만드는 방법
 * 1. 객체리터럴 (= 객체생성표기법)
 * 코드로 데이터를 만듬. 많은 데이터를 객체리터럴로 생성할 경우 수정이 어려움.
 */

let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: "red",
};

/*
 * 객체를 만드는 방법
 * 2. 함수로 객체 만들기
 * 객체리터럴과 결과물은 동일하지만, 객체의 틀과 데이터가 분리되어있음 (생성부분이 별도로 존재)
 * 객체리터럴로 만든 것 보다 수정이 간단함
 */

function makeBox(width: number, height: number, borderRadius: number, backgroundColor: string): Box {
  return {
    width,
    height,
    borderRadius,
    backgroundColor,
  };
}

makeBox(100, 100, 0, "blue");

/*
 * 객체를 만드는 방법
 * 3. 클래스
 * 함수로 만든 객체와의 차이점 : instanceof 를 이용해 어떤 클래스로 만든 객체인지를 확인할 수 있음. 
 */

class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(width: number, height: number, borderRadius: number, backgroundColor: string) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10, 10, 0, "blue");

// * 값을 바꾸는 방법

box.borderWidth = 10;
box["className"] = "box rounded";
//box.color = 'blue';
//delete box.color;

const box1 = box; //객체는 참조타입이기에 주소값을 넘김
const box2 = Object.assign({}, box); //첫객체에 이후객체들을 덮어씀. 얕은복사.
const box3 = JSON.parse(JSON.stringify(box)); //객체를 문자열로 만들고 새로 생성. 깊은복사.
const box4 = { ...box, borderRadius: 10 }; //전개연산자 이용. box2와 동일, 값 추가, 변경이 쉬움. 얕은복사.