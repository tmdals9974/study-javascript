abstract class Shape2 {
  public static MIN_BORDER_WIDTH = 0;
  public static MAX_BORDER_WIDTH = 30;

  public readonly name: string = "Shape";
  protected _borderWidth: number;
  private action!: string; // '!'는 값이 없을 수 있다는 지시어

  constructor(borderWidth: number = 0) {
    this._borderWidth = borderWidth;
  }

  abstract area: () => number;

  set borderWidth(width: number) {
    if (width >= Shape2.MIN_BORDER_WIDTH && width <= Shape2.MAX_BORDER_WIDTH) {
      this._borderWidth = width;
    } else {
      throw new Error("borderWidth 허용 범위를 벗어난 동작을 시도했습니다.");
    }
  }

  get borderWidth(): number {
    return this._borderWidth;
  }
}

//클래스 상속
//! 클래스 상속은 1개만 가능
class Circle2 extends Shape2 {
  private _radius: number; //자신만의 속성 부여가능
  public name: string = "Circle"; //부모에서 정의된 속성 재정의 가능 (부모값은 prototype에 저장되어있음. js는 인스턴스 내의 속성을 찾고, 없으면 prototype을 찾는 식임.)

  constructor(radius: number) {
    super();
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  area = () => this._radius * this._radius * Math.PI;
}

class Rect2 extends Shape2 {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();

    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  area = () => this._width * this._height;
}

const circle = new Circle2(50);
const rect = new Rect2(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
  rect.borderWidth = 31;
} catch (e) {
  console.log(e);
}

// =================================================================
// 클래스로 인터페이스 구현
// 인터페이스에서는 public만 선언 가능, private한 속성은 클래스 내부에서 구현.
// ! 인터페이스 다중상속 가능

interface Container {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}

class MyContainer implements Container {
  private name: string;
  tagName: string;
  className: string;

  constructor(name: string, tagName: string, className: string) {
    this.name = name;
    this.tagName = tagName;
    this.className = className;
  }

  getName = () => this.name;
  getTagName = () => this.tagName;
  getClassName = () => this.className;
}

console.log("done");
