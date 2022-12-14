/****************************************************************
 * * 7-1. 코드는 하나다? 코드를 구성하는 요소들은 무엇이 있을까?
 *
 * 코드 가독성 : 코드를 보고 어떤 일을 하는지 바로 알 수 있게 하는 것. 코드가 쓰이는 시간보다는 읽히는 시간이 더 많음. 협업의 필수.
 * 가독성은 상대적임. 각자의 이해도에 따라 다름. 어려운 코드도 읽기 쉬운 사람이 있음.
 * 저수준의 내용을 학습하는 것은 어렵지만, 투자할 가치가 있는 지식임.
 * 
 * 
 * 코드는 식별자, 함수명, 변수, 괄호, 세미콜론 등 으로 이루어져 있음.
 * const, 공백, 이퀄, 세미콜론, 괄호 등 을 모두 토큰이라 부름.
 * 토큰보다 더 작은 단위는 문자.
 * 각종 토큰이 모여서 코드가 됨.
 * 
 * 사람이 이해하기 쉬운 상태 : 고수준 
 * 기계가 이해하기 쉬운 상태 : 저수준
 ****************************************************************/

const MAX_COUNT = 100;

function double(x) {
  if (a > MAX_COUNT) {
    return a;
  } else {
    return a * 2;
  }
}

double(15);

/****************************************************************
 * * 
 ****************************************************************/