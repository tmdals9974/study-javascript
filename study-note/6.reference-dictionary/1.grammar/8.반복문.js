//for, while, do while, for of (배열 반복), for in (객체 반복)

const arr = ["a", "b", "c", "d"];

// console.log(arr[1]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

i = 0;

do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

for (const item of arr) {
  console.log(item);
}

for (const index in arr) {
  console.log(arr[index]);
}

const obj = {
  color: 'red',
  width: 200,
  height: 200,
};

for (const key in obj) {
  console.log(key);
}