/*
  김민태 강사가 추천하는 타입/인터페이스 사용 방법

  데이터 표현 시 : Type 사용
  데이터를 포괄하는 객체 묘사 : Interface 사용

  why? type Name = string; 과 같은 문법을 Type에서만 제공
*/


// ===================================

export type YesOrNo = "Y" | "N";
export type DayOfWeek = "월" | "화" | "수" | "목" | "금" | "토" | "일";
export enum DayOfTheWeek {
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
  "일",
}

//interface는 불가능, typealias는 가능
export type Name = string;
export type Email = string;

export interface IUser {
  readonly id: number;
  readonly name: Name; //interface 내 type alias 사용 가능
  email: string;
  receiveInfo: boolean;
  active: YesOrNo;
}

export interface IUser {
  //Interface는 중복된 이름으로 생성 시, 하나로 병합함 (비추천)
  address?: string;
}

export type TUser = {
  readonly id: number;
  readonly name: Name;
  email: Email;
  receiveInfo: boolean;
  active: YesOrNo;
};

// export type TUser = { //Type은 중복된 이름으로 생성 불가
//   address? : string;
// }

export interface IUserProfile extends IUser {
  //인터페이스, 타입 모두 상속 가능
  profileImage: string;
  github?: string;
  twitter?: string;
}

export type TUserProfile = IUser & {
  //인터페이스, 타입 모두 상속 가능
  profileImage: string;
  github?: string;
  twitter?: string;
};

export interface Color {
  fontColor: string;
  strokeColor: string;
  borderColor: string;
  backgroundColor: string;
}

export type Display = {
  display: "none" | "block";
  visibility: boolean;
  opacity: number;
};

export type Geometry = {
  width: number;
  height: number;
  padding: number;
  margin: number;
};

export interface IStyle extends Color, Display, Geometry {
  tagName: string;
}

export type TStyle = Color &
  Display &
  Geometry & {
    tagName: string;
  };

export interface IOnlyNumberValueObject {
  [key: string]: number;
}

export type TOnlyBooleanValueObject = {
  [prop: string]: boolean;
};

//interface와 type을 이용하여 함수의 인자와 리턴타입을 지정할 수 있으며, 
//interface와 type을 이용할 경우 함수 정의문이 아닌 함수 표현식을 사용하여야함
export interface IGetApi {
  (url: string, search?: string): Promise<string>;
}

export type TGetApi = {
  (url: string, search?: string): Promise<string>;
};

export interface IRect {
  id: number; //interface에서 선언한 속성은 class에서 상속받아 구현할때 접근제한자 지정불가. 무조건 public임. 해결하려면 interface에서 선언하지않거나, public을 하거나 둘 중 하나임.
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface IRectConstructor { //클래스 내 속성과, 생성자에서 받는 인자가 다를때 생성자용으로 타입정의 가능. new 연산자를 붙여줘야함. 
  new (x: number, y: number, width: number, height: number): IRect;
}

//================================================================

const iUser: IUser = {
  id: 1,
  name: "빌 게이츠",
  email: "bill@ms.com",
  receiveInfo: false,
  active: "Y",
};

const iUserProfiles: TUserProfile = {
  id: 1,
  name: "빌 게이츠",
  email: "bill@ms.com",
  receiveInfo: false,
  active: "Y",
  profileImage: "https://..",
  github: "okay",
};

const IUserProfiles: TUserProfile[] = [];

const iStyle: IOnlyNumberValueObject = {
  borderWidth: 5,
  width: 300,
  height: 100,
};

const tStyle: TOnlyBooleanValueObject = {
  border: true,
  visible: false,
  display: true,
};

const getApi: IGetApi = (url, serach = "") => {
  return new Promise((resolve) => resolve("OK")); 
};

getApi("/api/users").then(data=> console.log(data));

class Rect implements IRect {
  //private id: number;  //interface내 선언된 속성은 무조건 public
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.id = Math.random() * 100000;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

const rect1 = new Rect(0, 0, 100, 20); //일반적인 클래스 생성자 이용

function createDefaultRect(cstor: IRectConstructor) { // 클래스 생성자 인터페이스 규격 이용
  return new cstor(0, 0, 100, 100);
}

const rect2 = createDefaultRect(Rect);