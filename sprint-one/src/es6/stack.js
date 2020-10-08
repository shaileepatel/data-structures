class Stack {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(val) {
    this.storage[this.length] = val;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    var out = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return out;
  }

  size() {
    return this.length;
  }

}