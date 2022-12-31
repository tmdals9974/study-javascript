/****************************************************************
 * * 제네릭 Object 사용
 ****************************************************************/

type User = {
  id: number;
  name: string;
};

type Address2 = {
  zipcode: number;
  address: string;
};

function pipeOne(value: any): any {
  return value;
}

function pipeTwo<T>(value: T): T {
  return value;
}

let p4 = pipeOne(10);
let p5 = pipeTwo("10");
let p6 = pipeTwo(true);

const pipeObjectOne = <T>(obj: T): T => {
  return obj;
};

let pol = pipeObjectOne({ id: 1, name: "", zipcode: 50213 });
let po2 = pipeObjectOne<User>({ id: 1, name: "" });

/****************************************************************
 * * 제네릭 Class 사용
 ****************************************************************/

class State<S, Config = {}> {
  private _state: S;
  config: Config;

  constructor(state: S, config: Config) {
    this._state = state;
    this.config = config;
  }

  getState(): S {
    return this._state;
  }
}

let s1 = new State<Address2, { active: boolean }>(
  {
    zipcode: 50213,
    address: "서울시",
  },
  {
    active: true,
  }
);

const s1Data = s1.getState();

console.log(s1Data.zipcode, s1Data.address, s1.config.active);

/****************************************************************
 * * 제네릭 활용
 ****************************************************************/

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "b");

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kv1: KeyPair<number, string> = { key: 1, value: "min" };
let kv2: KeyPair<number, number> = { key: 1, value: 2 };
