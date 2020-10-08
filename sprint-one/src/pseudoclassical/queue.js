var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.first + this.length] = val;
  this.length++;
  return this.length;
};

Queue.prototype.dequeue = function() {
  if (this.length === 0) {
    return undefined;
  }
  var out = this.storage[this.first];
  delete this.storage[this.first];
  this.length--;
  this.first++;
  return out;
};

Queue.prototype.size = function() {
  return this.length;
};


