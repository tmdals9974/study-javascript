import { NEWS_URL, CONTENT_URL } from "../config";
import { NewsFeed, NewsDetail } from "../types";

export class Api {
  xhr: XMLHttpRequest;
  url: string;

  constructor(url: string) {
    this.xhr = new XMLHttpRequest();
    this.url = url;
  }

  async request<AjaxResponse>(): Promise<AjaxResponse> {
    const response = await fetch(this.url)
    return await response.json() as AjaxResponse; // ! 기존 JSON.parse는 동기적이어서 UI가 업데이트 되지 못하였으나, fetch의 response.json 함수는 비동기여서 필수적으로 사용.
  }
}

export class NewsFeedApi extends Api {
  constructor() {
    super(NEWS_URL);
  }

  async getData(): Promise<NewsFeed[]> {
    return this.request<NewsFeed[]>();
  }
}

export class NewsDetailApi extends Api {
  constructor(id: string) {
    super(CONTENT_URL.replace("@id", id));
  }

  async getData(): Promise<NewsDetail> {
    return this.request<NewsDetail>();
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
