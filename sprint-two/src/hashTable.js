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
  var retrieveNodes = this._storage.get(index);
  if (retrieveNodes === undefined) {
    this._storage.set(index, [newNode]);
    return;
  }
  for ( var i = 0; i < retrieveNodes.length; i++) {
    if (retrieveNodes[i].key === k) {
      retrieveNodes[i].value = v;
      return;
    }
  }
  retrieveNodes.push(newNode);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieveNodes = this._storage.get(index);
  if (retrieveNodes === undefined) {
    return undefined;
  }
  for (var i = 0; i < retrieveNodes.length; i++) {
    if (retrieveNodes[i].key === k) {
      return retrieveNodes[i].value;
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieveNodes = this._storage.get(index);
  if (retrieveNodes === undefined) {
    return undefined;
  }
  for (var i = 0; i < retrieveNodes.length; i++) {
    if (retrieveNodes[i].key === k) {
      retrieveNodes.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(1)
 * retrieve - O(1)
 * remove - O(1)
 */


