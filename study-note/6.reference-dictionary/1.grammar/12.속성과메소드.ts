//* Object in fucntion

const obj = {
  name: "Min Tae",
  age: 40,
  getFamilyName: function () {
    return "kim";
  },
  getBloodType() {
    //축약형, 위 함수와는 완전 동일
    return "B";
  },
  getLastName: () => "kim", //애로우 함수, 위 두개 함수와는 다름 (context 컨트롤 측면)
};

obj.name;
obj.age;
obj.getFamilyName();
obj.getBloodType();

//================================================
//* getter/setter

obj.age = 200;
obj.age = -500;
//object property는 들어오는 값 제어가 불가능함
//class를 이용해 getter/setter를 사용해야함

class Person {
  private _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  set bloodType(bType: string) {
    if (bType === "A" || bType === "B" || bType === "O" || bType === "AB") {
      this._bloodType = bType;
    }
  }

  get bloodType() {
    return `${this._bloodType}형`;
  }
}

const p1 = new Person("B");
p1.bloodType;
p1.bloodType = "C";

//================================================
//* 속성 삭제 방지 방법

type MyObject = {
  name: string;
  age: number;
  deleteable?: string;
  getFamilyName: () => string;
  getLastName: () => string;
  getBloodType: () => string;
};

const obj2: MyObject = {
  name: "Min Tae",
  age: 40,
  deleteable: "",
  getFamilyName: function () {
    return "kim";
  },
  getBloodType() {
    return "B";
  },
  getLastName: () => "kim"
};

//delete obj2.name; //type을 생성하였기에 삭제불가능
delete obj2.deleteable; //optional이기에 삭제가능

const myObj = {
  name: 'kim',
}

//delete myObj.name; //ts파일이라 오류뜨는것. js에선 됨
//삭제 방지는 아래와 같이 가능

const myObj2 = Object.create(null, {
  name: {
    value: "Kim mintae",
    writable: true, //false일 경우 read only
    configurable: true //false일 경우 지울 수 없음
  }
})