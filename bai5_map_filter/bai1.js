const array = ["nguyen", "van", "kien"];
const result = array.map((item) => `<p>${item}</p>`);
// console.log(result);

const array2 = [1, 2, 3, 4];
const result2 = array2.map((item) => {
  return item * 2;
});
// console.log(array2);
// console.log(result2);

const result3 = array2.filter((item) => {
  return item >= 2;
});

console.log(result3);
