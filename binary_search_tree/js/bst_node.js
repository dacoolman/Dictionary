var Node = (function(){

  function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  Node.prototype.show = function() {
    return this.data;
  }

  return Node;
})();

module.exports = Node;
