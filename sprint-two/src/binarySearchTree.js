var Node = function(value) {
  var node = {};
  node.right = null;
  node.left = null;
  node.value = value;
  return node;
};

var BinarySearchTree = function(value) {
  var bst = {};
  bst.root = Node(value);
  _.extend(bst, bstMethods);
  return bst;
};

bstMethods = {};

bstMethods.insert = function(value) {
  var newNode = Node(value);
  var helper = function(node) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        helper(node.left);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        helper(node.right);
      }
    }
  };
  helper(this.root);
};

bstMethods.contains = function(target) {
  var helper = function(node) {
    if (node.value === target) {
      return true;
    }
    if (node.left === null && node.right === null) {
      return false;
    }
    if (target < node.value) {
      return helper(node.left);
    } else {
      return helper(node.right);
    }
  };
  return helper(this.root);
};

bstMethods.depthFirstLog = function(callback) {
  var helper = function(node) {
    callback(node.value);
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  };
  helper(this.root);
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(log(n))
 * contains - O(log(n))
 * depthFirstLog - O(n)
 */


