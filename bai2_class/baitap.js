class Nova {
  constructor(title, tentacgia) {
    this.title = title;
    this.tentacgia = tentacgia;
  }

  testClass() {
    return this.title + this.tentacgia;
  }
}

const test = new Nova("mat troi cua anh", "trung dong");

console.log(">>>test class", test.testClass());
