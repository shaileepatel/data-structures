var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  if (this._storage[item] !== item) {
    return false;
  } else {
    return true;
  }
};

setPrototype.remove = function(item) {
  if (this._storage[item] === item) {
    delete this._storage[item];
  } else {
    return undefined;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * always constant - O(1)
 */