class HeaderListData {
  constructor(source, separator = ",") {
    const rawData = source.split("\n");

    this.headers = rawData[0].split(separator);
    this.rows = rawData.filter((row, index) => index > 0).map((row) => row.split(separator));
  }

  row = (index) => this.rows[index].map((row, index) => [this.headers[index], row]);

  get length() {
    return this.rows.length;
  }

  get columnLength() {
    return this.headers.length;
  }
}

class MakeObject extends HeaderListData {
  toObject = (index) => this.row(index).reduce((a, [key, value]) => ({ ...a, [key]: value }), {});

  toAllObject = () =>
    Array(this.Length) //* for문을 쓰지않고 체이닝으로 작업하기 위해, 빈 배열 생성
      .fill(0) //* 데이터가 없어서 순회를 못하는 상황. 0이라는 값으로 채워둠.
      .map((item, index) => this.toObject(index)); 
}

const movieData = `Title, Release, Ticketing Rate, Director
보헤미안 랩소디 2018.10.31, 11.5%, 브라이언 싱어
완벽한 타인, 2018.10.314.6%, 이재규
동네사람들 2018.11.070.5%, 임진순`;

const movieList = new MakeObject(movieData);

console.log(movieList.toAllObject());