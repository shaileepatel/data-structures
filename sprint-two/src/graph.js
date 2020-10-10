

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.graph[node]) {
    this.graph[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.graph[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.graph[node]) {
    for (var i = 0; i < this.graph[node].length; i++) {
      this.removeEdge(node, this.graph[node][i]);
    }
    delete this.graph[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graph[fromNode] !== undefined && this.graph[toNode] !== undefined) {
    for (var i = 0; i < this.graph[fromNode].length; i++) {
      if (this.graph[fromNode][i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.graph[fromNode] !== undefined && this.graph[toNode] !== undefined) {
    this.graph[fromNode].push(toNode);
    this.graph[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.graph[fromNode] !== undefined && this.graph[toNode] !== undefined) {
    for (var i = 0; i < this.graph[fromNode].length; i++) {
      if (this.graph[fromNode][i] === toNode) {
        this.graph[fromNode].splice(i, 1);
      }
    }
    for (var i = 0; i < this.graph[toNode].length; i++) {
      if (this.graph[toNode][i] === fromNode) {
        this.graph[toNode].splice(i, 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graph) {
    cb(key);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addNode - O(1)
 * contains - O(1)
 * removeNode - O(n^2)
 * hasEdge - O(n)
 * addEdge - O(1)
 * removeEdge - O(n)
 * forEachNode - O(n)
 */






