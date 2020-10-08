var Stack = function() {
  var someInstance = {};
  someInstance.length = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
  return this.length;
};

stackMethods.pop = function() {
  if (this.length === 0) {
    return undefined;
  }
  var out = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return out;
};

stackMethods.size = function() {
  return this.length;
};

