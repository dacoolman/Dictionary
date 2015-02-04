var Node = require('./singly_node');

var SinglyLinkedList = (function(){
  function SinglyLinkedList() {
    this.head = new Node("head");
  }

  SinglyLinkedList.prototype.find = function(element) {
    var currentNode = this.head;
    while(currentNode.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  SinglyLinkedList.prototype.insert = function (newElement, element) {
    var newNode = new Node(newElement);
    var current = this.find(element);
    newNode.next = current.next;
    current.next = newNode;
  }

  SinglyLinkedList.prototype.display = function() {
    var currentNode = this.head;
    while(currentNode.next !== null) {
      console.log(currentNode.next.element);
      currentNode = currentNode.next;
    }
  }

  SinglyLinkedList.prototype.findPrevious = function(element) {
    var currentNode = this.head;
    while(currentNode.next !== null && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  SinglyLinkedList.prototype.remove = function(element) {
    var previousNode = this.findPrevious(element);
    if(previousNode.next !== null) {
      previousNode.next = previousNode.next.next;
    }
  }

  return SinglyLinkedList;
})();

module.exports = SinglyLinkedList;
