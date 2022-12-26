function delay(ms: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        resolve("success");
      } else {
        reject("failure");
      }
    }, ms);
  });
}

// delay(3000)
//   .then((result: string) => {
//     console.log("done promise!" + result);
//   })
//   .catch((error: string) => {
//     console.error("fail promise!" + error);
//   });

async function main() {
  try {
    //비동기를 이용하면 보통 UI가 멈춤.
    //다만 async,await은 실제 작동은 동기이나, 코드상으로 비동기처럼 보이는 것이기에 UI에 영향없음
    console.log('start job');
    const result = await delay(1 * 1000);
    console.log("done async!" + result);
  } catch (e) {
    console.error("fail async!" + e);
  }
}

main();