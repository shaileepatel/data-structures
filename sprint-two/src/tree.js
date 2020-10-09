var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * .addChild will have a complexity of O(1) and .contains will have O(n)
 */
