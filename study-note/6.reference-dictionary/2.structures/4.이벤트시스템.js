/****************************************************************
 * * 이벤트 캡처링, 이벤트 버블링에 대한 설명.
 * * 아래 코드는 미완성임, 6-33 강을 시청하여 확인 필요.
 ****************************************************************/

function main() {
  const BUBBLING_PHASE = false;
  const CAPTURING_PHASE = true;
  const PHASE_NAME = ["NONE", "CAPTURING", "TARGET", "BUBBLING"];

  function eventLogger({ target, currentTarget }) {
    console.log(`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[e.eventPhase]}`);
  }

  let divs = document.querySelectorAll("div");
  divs.forEach((div) => div.addEventListener("click", eventLogger, BUBBLING_PHASE));
}

document.addEventListener("DOMContentLoaded", main);
