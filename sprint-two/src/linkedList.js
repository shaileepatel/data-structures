var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (this.head === null) {
      return undefined;
    } else {
      var removeNode = this.head;
      this.head = this.head.next;
      removeNode.next = null;
      return removeNode.value;
    }
  };

  list.contains = function(target) {
    if (this.head === null) {
      return undefined;
    }
    var current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail and removeHead is O(1) - constant, contains is O(n) - linear.
 */
