var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.length = 0;
  someInstance.first = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.first + this.length] = val;
  this.length++;
  return this.length;
};

queueMethods.dequeue = function() {
  if (this.length === 0) {
    return undefined;
  }
  var out = this.storage[this.first];
  delete this.storage[this.first];
  this.length--;
  this.first++;
  return out;
};

queueMethods.size = function() {
  return this.length;
};


