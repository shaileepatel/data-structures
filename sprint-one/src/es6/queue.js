class Queue {
  constructor() {
    this.storage = {};
    this.length = 0;
    this.first = 0;
  }

  enqueue(val) {
    this.storage[this.first + this.length] = val;
    this.length++;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    var out = this.storage[this.first];
    delete this.storage[this.first];
    this.length--;
    this.first++;
    return out;
  }

  size() {
    return this.length;
  }

}
