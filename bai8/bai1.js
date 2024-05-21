const person = {
  name: "John",
  age: 34,
  adress: "ha noi",
};

const { name, age } = person;

console.log(`toi ten la ${name} nam nay toi ${age} tuoi`);

const react = ["facebook", "all-in-one", "javascript"];

const [, , tech] = react;
console.log(tech);

const dev = { salary: "2000", tool: "laptop", like: "bugs" };
const { like } = dev;
console.log(like);
