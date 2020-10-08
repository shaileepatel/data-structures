var Stack = function() {
  this.storage = {};
  this.length = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.length] = val;
  this.length++;
  return this.length;
};

Stack.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  }
  var out = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length--;
  return out;
};

Stack.prototype.size = function () {
  return this.length;
};


