import { NEWS_URL, CONTENT_URL } from "../config";
import { NewsFeed, NewsDetail } from "../types";

export class Api {
  ajax: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.ajax = new XMLHttpRequest();
    this.url = url;
  }

  getRequest<AjaxResponse>(cb: (data: AjaxResponse) => void): void {
    this.ajax.open("GET", this.url);
    this.ajax.addEventListener('load', () => {
      cb(JSON.parse(this.ajax.response) as AjaxResponse);
    });
    this.ajax.send();
  }
}

export class NewsFeedApi extends Api {
  constructor() {
    super(NEWS_URL);
  }

  getData(cb: (data: NewsFeed[]) => void): void {
    return this.getRequest<NewsFeed[]>(cb);
  }
}

export class NewsDetailApi extends Api {
  constructor(id: string) {
    super(CONTENT_URL.replace("@id", id));
  }

  getData(cb: (data: NewsDetail) => void): void {
    return this.getRequest<NewsDetail>(cb);
  }
}

/* 
  ! 믹스인 함수를 이용한 Api 클래스
  - 타입스크립트 공식문서에서도 소개되고있는 믹스인 함수

  * baseClasses에 제공된 class를 targetClass에 합성시키는 역할
  ? class extends를 사용하지 않고 mixin을 사용하는 이유
  ** 1. 상속관계를 바꾸려면 전체 코드를 수정해야함. 유연성이 없음.
  ** 2. extends는 다중 상속을 지원하지 않음.
*/

/* 
class Api {
  getRequest<AjaxResponse>(url: string): AjaxResponse {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", url, false);
    ajax.send();

    return JSON.parse(ajax.response);
  }
}

class NewsFeedApi {
  getData(): NewsFeed[] {
    return this.getRequest<NewsFeed[]>(NEWS_URL);
  }
}

class NewsDetailApi {
  getData(id: string): NewsDetail {
    return this.getRequest<NewsDetail>(CONTENT_URL.replace("@id", id));
  }
}

function applyApiMixins(targetClass: any, baseClasses: any[]): void {
  baseClasses.forEach((baseClass) => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach((name) => {
      const descriptor = Object.getOwnPropertyDescriptor(
        baseClass.prototype,
        name
      );

      if (descriptor) {
        Object.defineProperty(targetClass.prototype, name, descriptor);
      }
    });
  });
}

interface NewsFeedApi extends Api {}
interface NewsDetailApi extends Api {}

applyApiMixins(NewsFeedApi, [Api]);
applyApiMixins(NewsDetailApi, [Api]); 
*/