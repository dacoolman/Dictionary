var Trie = require('./../../tries/js/trie');

var HashTable = (function(){
  function HashTable() {
    this.table = new Array(26);
  }

  HashTable.prototype.buildLinks = function() {
    for(var i = 0; i < this.table.length; i++) {
      this.table[i] = [];
    }
  }

  HashTable.prototype.linkBuilt = function() {
    var first = this.table[0];
    if (first === undefined || first.constructor.name !== "Array") {
      return false;
    } else {
      return true;
    }
  }

  HashTable.prototype.simpleHash = function(data) {
    return data.charCodeAt() - 65;
  }

  HashTable.prototype.betterHash = function(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i].charCodeAt();
    }
    return sum % 26;
  }

  HashTable.prototype.simplePut = function(data) {
    this.table[this.simpleHash(data)] = data;
  }

  HashTable.prototype.linkPut = function(data) {
    if (this.linkBuilt() === false) {
      this.buildLinks();
    }

    var loc = this.simpleHash(data);

    if (this.table[loc] !== undefined) {
      this.table[loc].push(data);
    } else {
      this.table[loc] = data;
    }
  }

  HashTable.prototype.showDistribution = function() {
    for(var i = 0; i < this.table.length; i++) {
      console.log(this.table[i]);
    }
  }

  return HashTable;
})();

module.exports = HashTable;
