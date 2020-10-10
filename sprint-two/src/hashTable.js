var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

var HashNode = function(key, value) {
  this.value = value;
  this.key = key;
};

HashTable.prototype.insert = function(k, v) {
  var newNode = new HashNode(k, v);
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, newNode);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieveNode = this._storage.get(index);
  if (retrieveNode === undefined) {
    return undefined;
  }
  return retrieveNode.value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


