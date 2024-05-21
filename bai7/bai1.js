// console.log("hello world");

let array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2];
console.log(array3);

let a = 6;
let b = 8;
array1.push(a);
array1 = [...array1, b];
console.log(">>>arry push", array1);

const PerSon = { name: "nguyen van kien", tuoi: "22t", adress: "ha noi" };

const result = { ...PerSon, tuoi: "26t" };
console.log(PerSon);
console.log(result);

let array = [1, 2, 3];
const Sum1 = (a, b, c) => {
  return a + b + c;
};

console.log(Sum1(...array));
