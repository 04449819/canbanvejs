const a = 4;
const test = () => {
  if (a > 5) {
    return `a: ${a} > 5`;
  } else {
    return `a: ${a} < 5`;
  }
};

// console.log(test());

// let b = "";

const b = a > 5 ? `a: ${a} > 5` : `a: ${a} < 5`;
// console.log(b);
let listsv = [
  { ten: "ten A", tuoi: 12, lop: 10 },
  { ten: "ten B", tuoi: 13, lop: 11 },
  { ten: "ten C", tuoi: 14, lop: 11 },
  { ten: "ten D", tuoi: 15, lop: 11 },
  { ten: "ten E", tuoi: 16, lop: 12 },
];

//them moi 1 doi tuong
const svmoi = { ten: "ten f", tuoi: 17, lop: 12 };
listsv = listsv.concat(svmoi);
console.log(listsv);

//update 1 doi tuong
let ten1 = "ten f";
let ten = "ten F";
let tuoi = 200;
// const listsvtam = listsv.map((item) => {
//   if (item.ten === ten1) {
//     let ten = "ten F";
//     return (item = { ...item, ten });
//   } else {
//     return (item = item);
//   }
// });

listsv = listsv.map((item) =>
  item.ten === ten1 ? (item = { ...item, ten, tuoi }) : (item = item)
);
// console.log(listsv);

//xoa 1 doi tuong
tencanxoa = "ten A";
listsv = listsv.filter((item) => item.ten !== tencanxoa);
console.log(listsv);

//tim doi tuong
let tencantim = "ten B";
const svcantim = listsv.filter((item) => item.ten === tencantim);

console.log(svcantim);
