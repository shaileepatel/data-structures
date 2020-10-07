var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    if (count !== 0) {
      storage[count] = value;
    } else {
      storage[count] = value;
      return 1;
    }
    return count + 1;
  };

  someInstance.dequeue = function() {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    if (count !== 0) {
      var out = storage[0];
      delete storage[0];
      return out;
    } else {
      return null;
    }
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    if (count !== 0) {
      return count;
    } else {
      return 0;
    }
  };

  return someInstance;
};
