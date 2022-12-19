function addAge(age) {
  // if (typeof age === 'number') {
  //   return age+1;
  // } else {
  //   throw 'ERROR';
  // }

  return age+1;
}

let age = addAge(30);
console.log(age);

age = addAge('30');
console.log(age);