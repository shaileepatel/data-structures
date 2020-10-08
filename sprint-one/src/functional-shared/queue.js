var Queue = function() {
  var someInstance = {};
  someInstance.length = 0;
  someInstance.first = 0;
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.length + this.first] = val;
  this.length++;
  return this.length;
};

queueMethods.dequeue = function() {
  if (this.length === 0) {
    return null;
  }
  var out = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  this.length--;
  return out;
};

queueMethods.size = function() {
  return this.length;
};




