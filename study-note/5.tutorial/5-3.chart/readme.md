# 차트 라이브러리 만들어보기
  - 2D 그래픽은 Canvas와 SVG를 이용하여 사용 가능.
  - CSS는 Canvas를 추상화함.
  - 3D 그래픽은 WebGL을 이용하여 사용 가능하며, GPU를 사용가능.
  - 라이브러리 설계 원칙
    1. 인터페이스의 일관성: 네이밍이나 호출방식 등 예측가능해야함.
    2. 오류처리의 일관성: 리턴값이나 오류처리 방식이 일관성이 있어야함.
    3. 버전관리: 버전관리가 중요함 (버전관리 방식은 semantic versioning 이 자주 쓰임)
    4. 문서관리: 코드만으로 모든 의미를 표현할 수 없음. 문서를 따로만들기 보다는 코드내에 문서를 만드는게 좋음. npm jsDoc을 사용하면 코드내 주석을 이용하여 문서를 생성해줌.

## Reference
* https://dev.to/kaykaycodes/7-days-of-css-graphics-and-animations-15e4
* https://codepen.io/towc/pen/mJzOWJ
* https://webglsamples.org/field/field.html
* https://docs.npmjs.com/about-semantic-versioning
* https://rollupjs.org/guide/en/
* https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-%EC%84%9C%EB%B8%8C%EB%AA%A8%EB%93%88
