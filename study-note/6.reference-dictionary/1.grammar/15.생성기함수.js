function makeInfiniteEnergyGenerator() {
  let energy = 0;
  return function (booster = 0) {
    if (booster) {
      energy += booster;
    } else {
      energy++;
    }

    return energy;
  };
}

const energy = makeInfiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  console.log(energy());
}

console.log(energy(5));

//================================================

/*
function 뒤에 asterisk (*) 를 붙임
통상적인 함수의 작동 방식과 전혀 다름.

최초에 호출하면 함수를 실행 준비 상태로 만듬.
이후 함수를 실행할 도구를 담은 객체를 반환.

도구를 이용해 함수를 실행/정지 반복 가능.
*/

function* infiniteEnergyGenerator() {
  let energy = 1;
  while(true) {
    const booster = yield energy; 
    //yield를 만날 경우 generator를 멈추고 값을 반환함
    //매개변수를 받을경우 yield 변수 값에 값이 들어감

    if (booster) {
      energy += booster;
    } else {
      energy++;
    }
  }
}

const energyGenerator = infiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  console.log(energyGenerator.next());
  //next의 리턴 객체에 포함된 done은, generator가 return을 만날 경우 더이상 실행시킬 코드가 없다는 의미로 true를 반환함
}

console.log(energyGenerator.next(5));