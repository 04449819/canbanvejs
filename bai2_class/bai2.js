class PerSon {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getaddress() {
    return "i live in " + this.address;
  }
}

const test = new PerSon("hoi dan it", "ha noi");

console.log(">>>test", test);

console.log(">>>test", test.getaddress());
