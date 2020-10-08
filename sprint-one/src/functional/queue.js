var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[length + first] = value;
    length++;
    return length;
  };

  someInstance.dequeue = function() {
    if (length === 0) {
      return null;
    }
    var out = storage[first];
    delete storage[first];
    first++;
    length--;
    return out;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
